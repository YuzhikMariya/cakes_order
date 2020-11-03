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
                List<string> cakeIdArr = new List<string>();
                foreach (var h in userHistory)
                {
                    cakeIdArr.Add(h.CakeId);
                }
                List<Cake> cakes = db.Catalog.GetByIdArr(cakeIdArr);
                foreach(var h in userHistory)
                {
                    foreach(var c in cakes)
                    {
                        if(c.Id == h.CakeId)
                        {
                            ListItem listItem = new ListItem { Cake = c, Count = h.Count };
                            resultHistory.Add(listItem);
                        }
                    }
                }
                return new Account { User = user, History = resultHistory };
            }
            return new Account { User = null, History = null };
            

        }


    }
}
