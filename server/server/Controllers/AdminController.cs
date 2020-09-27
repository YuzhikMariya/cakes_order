using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class AdminController: Controller
    {

        private ApplicationContext db;
        public AdminController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post(AddedCake cake)
        {
            char separator = System.Globalization.CultureInfo.CurrentCulture.NumberFormat.CurrencyDecimalSeparator[0];
            string stringPrice = cake.Price.Replace('.', separator);
            decimal price = Convert.ToDecimal(stringPrice);
            Cake newCake = new Cake
            {
                Id = Guid.NewGuid().ToString(),
                Title = cake.Title,
                Price = price,
                Time = TimeSpan.Parse(cake.Time),
                Description = cake.Description
            };


            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", cake.Img.FileName);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    cake.Img.CopyTo(stream);
                }
                newCake.Photo = cake.Img.FileName;
                db.Catalog.Add(newCake);
                await db.SaveChangesAsync(); 
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
    }
}
