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

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        private ApplicationContext db;
        public CatalogController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public CatalogWithTotalCount Get(int page, int pageSize)
        {
            int catalogLength = db.Catalog.Count();
            if (pageSize == 0)
            {
                pageSize = catalogLength;
            }

            List<Cake> catalog = db.Catalog.ToList();
            var catalogArray = catalog.ToArray();

            int length = catalogArray.Length;
            int startIndex = (page - 1) * pageSize;
            if (startIndex >= length)
            {

                return new CatalogWithTotalCount();
            }
            int count = pageSize;
            if (startIndex + count >= length)
            {
                count = length-startIndex;
            }
            CakeWithCookingTimeInfo[] resultArray = new CakeWithCookingTimeInfo[count];

            DateTime nowTime = DateTime.Now;
            for(int i = startIndex; i < startIndex+count; i++)
            {
                TimeSpan newTime = catalogArray[i].Time;
                DateTime lastOrderTime = nowTime;
                bool isCooking = false;
                foreach (var cookingId in db.CookingList)
                {
                    if (catalogArray[i].Id == cookingId.CakeId)
                    {
                        newTime = newTime.Add(catalogArray[i].Time);
                        System.Diagnostics.Debug.WriteLine(newTime.Hours + " " + newTime.Minutes + "     " + nowTime + "   " + cookingId.OrderTime);
                        isCooking = true;
                        lastOrderTime = cookingId.OrderTime;
                    }
                }
                TimeSpan timeWithCookingAll = newTime - nowTime.Subtract(lastOrderTime);
                if(timeWithCookingAll < catalogArray[i].Time)
                {
                    timeWithCookingAll = catalogArray[i].Time;
                }
                resultArray[i - startIndex] = new CakeWithCookingTimeInfo
                {
                    CakeInfo = new Cake {
                        Id = catalogArray[i].Id,
                        Photo = catalogArray[i].Photo,
                        Price = catalogArray[i].Price,
                        Description = catalogArray[i].Description,
                        Title = catalogArray[i].Title,
                        Time = catalogArray[i].Time,
                    },
                    IsCooking = isCooking,
                    TimeWithCookingAll = timeWithCookingAll
                };
            }
            
            CatalogWithTotalCount resultCake = new CatalogWithTotalCount { Catalog = resultArray, TotalCount = length };
            return resultCake;
        }

        [HttpPost]
        [Authorize]
        [Authorize(Roles = "User")]
        public IActionResult Post(string id)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cake cake = db.Catalog.FirstOrDefault(c => c.Id == id);
            Cart userCartWithCake = db.Carts.FirstOrDefault(c => c.CakeId == id && c.UserId == userEmail);
            if(userCartWithCake != null)
            {
                userCartWithCake.Count += 1;
                db.Carts.Update(userCartWithCake);
                db.SaveChanges();
            }
            else
            {
                db.Carts.Add(new Cart { CakeId = id, UserId = userEmail, Count = 1 });
                db.SaveChanges();
            }
            
            return Ok(cake);
        }

    }
}
