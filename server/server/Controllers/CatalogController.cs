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
        public async Task<CatalogWithTotalCount> Get(int page, int pageSize)
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
            Cake[] resultArray = new Cake[count];
            

            for(int i = startIndex; i < startIndex+count; i++)
            {
                TimeSpan newTime = catalogArray[i].Time;
                
                foreach (var cookingId in db.CookingList)
                {
                    if (catalogArray[i].Id == cookingId.CakeId)
                    {
                        newTime = newTime.Add(catalogArray[i].Time);
                    }
                }
                resultArray[i - startIndex] = new Cake
                {
                    Id = catalogArray[i].Id,
                    Photo = catalogArray[i].Photo,
                    Price = catalogArray[i].Price,
                    Description = catalogArray[i].Description,
                    Title = catalogArray[i].Title,
                    Time = newTime

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
