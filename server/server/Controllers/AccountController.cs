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

        [Route("/role")]
        [HttpGet]
        public string GetRole()
        {
            string userEmail = HttpContext.User.Identity.Name;
            foreach (User u in Store.Users)
            {
                if (u.Email == userEmail)
                {
                    return AuthResponse.User;
                }
            }

            foreach (Admin a in Store.Admins)
            {
                if (a.Email == userEmail)
                {
                    return AuthResponse.Admin;
                }
            }
            return AuthResponse.Guest;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login(Login model)
        {
            User user = null;
            foreach(User u in Store.Users)
            {
                if((u.Email == model.Email) && (u.Password == model.Password))
                {
                    user = u;
                }
            }

            if (user != null)
            {
                await Authenticate(model.Email, "User");
                return Ok(new AuthResponse { Status = 200, Role = AuthResponse.User});
            }

            Admin admin = null;
            foreach (Admin a in Store.Admins)
            {
                if ((a.Email == model.Email) && (a.Password == model.Password))
                {
                    admin = a;
                }
            }

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
            User user = null;//await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            foreach (User u in Store.Users)
            {
                if ((u.Email == model.Email) && (u.Password == model.Password))
                {
                    user = u;
                }
            }

            if (user == null)
            {
                string cartId = Guid.NewGuid().ToString(), historyId = Guid.NewGuid().ToString();
                Store.Carts.Add(new Cart { Id = cartId, CartList = new List<CartItem>() });
                Store.Histories.Add(new History { Id = historyId, HistoryList = new List<CartItem>() });
                Store.Users.Add(new User { Id = Guid.NewGuid().ToString(), Email = model.Email, Name = model.Name, Surname = model.Surname, Phone = model.Phone, HistoryID = historyId, CartID = cartId });
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
