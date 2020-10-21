using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using server.DBRepositories;

namespace server.Controllers
{
    public class AccountController : Controller
    {
        private UnitOfWork db;
        public AccountController(ApplicationContext context)
        {
              db = new UnitOfWork(context);
        }

        [Route("/role")]
        [HttpGet]
        public string GetRole()
        {
            string userEmail = HttpContext.User.Identity.Name;
            User user = db.Users.GetByEmail(userEmail);//.FirstOrDefault(u => u.Email == userEmail);
            if(user != null)
            {
                return AuthResponse.User;
            }

            Admin admin = db.Admins.GetByEmail(userEmail);//.FirstOrDefault(u => u.Email == userEmail);
            if(admin != null)
            {
                return AuthResponse.Admin;
            }
                
            return AuthResponse.Guest;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login(Login model)
        {
            User user = db.Users.GetAll().FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
            if (user != null)
            {
                await Authenticate(model.Email, "User");
                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.User});
            }
            Admin admin = db.Admins.GetAll().FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
            if (admin != null)
            {
                await Authenticate(model.Email, "Admin");
                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.Admin });

            }
            return Ok(new AuthResponse { Status = 404, Role = AuthResponse.Guest });
        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register(Registration model)
        {
            User user = db.Users.GetByEmail(model.Email);//.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null)
            {
                string userId = Guid.NewGuid().ToString();

                db.Users.Create(new User { Email = model.Email, Password=model.Password, Name = model.Name, Surname = model.Surname, Phone = model.Phone });
                db.Users.Save();
                await Authenticate(model.Email, "User");

                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.User });

            }

            return Ok(new AuthResponse { Status = 404, Role = AuthResponse.Guest });
        }

        private async Task Authenticate(string userName, string role)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName),
                new Claim(ClaimTypes.Role, role)
            };
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }

        [Route("logout")]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }
    }

}
