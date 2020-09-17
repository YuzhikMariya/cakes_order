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
            Array.Copy(catalogArray, startIndex, resultArray, 0, count);
            CatalogWithTotalCount resultCake = new CatalogWithTotalCount { Catalog = resultArray, TotalCount = length };
            return resultCake;
        }


        [HttpPost]
        public IActionResult Post(string id)
        {
            foreach (Cake cake in Store.Catalog)
            {
                if (cake.Id == id)
                {
                    CartItem cartItem = new CartItem { Cake = cake, Count = 1 };
                    Store.Cart.CartList.Add(cartItem);
                    return Ok(cake);
                }
            }
            return Ok();
        }

    }
}
