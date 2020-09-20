using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;
using server.Data;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace server.Controllers
{
   // [Route("api/[controller]")]
    public class AccountController : Controller
    {
        //private UserContext db;
        //public AccountController(UserContext context)
        //{
        //  //  db = context;
        //}



        [Route("login")]
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(Login model)
        {
            User user = null;
            foreach(User u in Store.Users)
            {
                if(u.Email.Equals( model.Email))
                {
                    user = u;
                }
            }

            if (user != null)
            {
                await Authenticate(model.Email); // аутентификация

                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.User});

            }

            return Ok(new AuthResponse { Status = 404, Role = AuthResponse.Guest });
        }

        [Route("register")]
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(Registration model)
        {

            User user = null;//await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            foreach (User u in Store.Users)
            {
                System.Diagnostics.Debug.WriteLine(u.Email + "    " + model.Email);
                if (u.Email.Equals(model.Email))
                {
                    user = u;
                }
            }

            if (user == null)
            {
                Store.Users.Add(new User { Id = Guid.NewGuid().ToString(), Email = model.Email, Name = model.Name, Surname = model.Surname, Phone = model.Phone, History = new List<CartItem>() });
                await Authenticate(model.Email); // аутентификация

                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.User });

            }

            return Ok(new AuthResponse { Status = 404, Role = AuthResponse.Guest });
        }

        private async Task Authenticate(string userName)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
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
