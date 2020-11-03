using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using server.Models.HelpModels;
using server.Interfaces;
using server.DBRepositories;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        private UnitOfWork db;
        public CatalogController(ApplicationContext context)
        {
            db = new UnitOfWork(context);
        }

        [HttpGet]
        public CatalogWithTotalCount Get(int page, int pageSize)
        {
            int catalogLength = db.Catalog.GetAll().Count();

            if (pageSize == 0)
            {
                pageSize = catalogLength;
            }
            var catalog = db.Catalog.GetPage(page, pageSize);
            if(catalog == null)
            {
                return new CatalogWithTotalCount();
            }
            List<CakeWithCookingTimeInfo> resultArray = new List<CakeWithCookingTimeInfo>();//[catalog.Count];

            DateTime nowTime = DateTime.Now;
            foreach(Cake cake in catalog)
            {
                TimeSpan newTime = cake.Time;
                DateTime lastOrderTime = nowTime;
                bool isCooking = false;
                foreach (var cookingId in db.CookingList.GetAll())
                {
                    if (cake.Id == cookingId.CakeId)
                    {
                        newTime = newTime.Add(cake.Time);
                        isCooking = true;
                        lastOrderTime = cookingId.OrderTime;
                    }
                }
                TimeSpan timeWithCookingAll = newTime - nowTime.Subtract(lastOrderTime);
                if (timeWithCookingAll < cake.Time)
                {
                    timeWithCookingAll = cake.Time;
                }
                resultArray.Add(new CakeWithCookingTimeInfo
                {
                    CakeInfo = new Cake
                    {
                        Id = cake.Id,
                        Photo = cake.Photo,
                        Price = cake.Price,
                        Description = cake.Description,
                        Title = cake.Title,
                        Time = cake.Time,
                    },
                    IsCooking = isCooking,
                    TimeWithCookingAll = timeWithCookingAll
                });
            }
            
            CatalogWithTotalCount resultCake = new CatalogWithTotalCount { Catalog = resultArray, TotalCount = db.Catalog.GetCount() };
            return resultCake;
        }

        [HttpPost]
        [Authorize]
        [Authorize(Roles = "User")]
        public IActionResult Post(string id)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cake cake = db.Catalog.GetById(id);
            Cart userCartWithCake = db.Carts.GetCartByUserEmail(userEmail, id);
            
            if(userCartWithCake != null && userCartWithCake.CakeId == id)
            {
                userCartWithCake.Count += 1;
                db.Carts.Update(userCartWithCake);
                db.Carts.Save();
            }
            else
            {
                db.Carts.Create(new Cart { CakeId = id, UserId = userEmail, Count = 1 });
                db.Carts.Save();
            }
            
            return Ok(cake);
        }

    }
}
