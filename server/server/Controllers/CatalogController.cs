using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Data;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {

        private readonly IWebHostEnvironment _hostingEnvironment;
        public CatalogController(IWebHostEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public CatalogWithTotalCount Get(int page, int pageSize)
        {
            if(pageSize == 0)
            {
                pageSize = Store.Catalog.Count;
            }
            var catalogArray = Store.Catalog.ToArray();
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
                foreach (var cookingId in Store.CookingList.ListOfId)
                {
                    if (catalogArray[i].Id == cookingId)
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

        Cart getUserCart(string userEmail)
        {
            string cartId = "";
            foreach (User u in Store.Users)
            {
                if (u.Email == userEmail)
                {
                    cartId = u.CartID;
                    break;
                }
            }
            foreach (Cart cart in Store.Carts)
            {
                if (cart.Id == cartId)
                {
                    return cart;
                }
            }
            return null;
        }

        [HttpPost]
        public IActionResult Post(string id)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = getUserCart(userEmail);
            foreach (Cake cake in Store.Catalog)
            {
                if (cake.Id == id)
                {
                    CartItem cartItem = new CartItem { CakeId = id, Count = 1 };
                    cart.CartList.Add(cartItem);
                    return Ok(cake);
                }
            }
            return Ok();
        }

    }
}
