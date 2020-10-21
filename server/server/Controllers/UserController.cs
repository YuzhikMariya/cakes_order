using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using server.Models.ResponseModels;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using server.DBRepositories;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "User")]
    public class UserController : Controller
    {
        private UnitOfWork db;
        public UserController(ApplicationContext context)
        {
            db = new UnitOfWork(context);
        }

        [Authorize]
        [HttpGet]
        public Account Get()
        {
            string email = HttpContext.User.Identity.Name;
            User user = db.Users.GetByEmail(email);
            List<History> userHistory = db.Histories.GetAll().Where(h => h.UserId == email).ToList();
            if(user != null && userHistory != null)
            {
                List<ListItem> resultHistory = new List<ListItem>();
                foreach (var h in userHistory)
                {
                    Cake cake = db.Catalog.GetById(h.CakeId);
                    ListItem listItem = new ListItem { Cake = cake, Count = h.Count };
                    resultHistory.Add(listItem);
                }
                return new Account { User = user, History = resultHistory };
            }
            return new Account { User = null, History = null };
            

        }


    }
}
