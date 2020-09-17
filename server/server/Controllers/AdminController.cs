using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class AdminController: Controller
    {
        [HttpPost]
        public IActionResult Post(AddedCake cake)
        {

            Cake newCake = new Cake();
            newCake.Id = Guid.NewGuid().ToString();
            newCake.Title = cake.Title;
            newCake.Price = cake.Price;
            newCake.Time = TimeSpan.Parse(cake.Time);
            newCake.Description = cake.Description;
            

            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", cake.Img.FileName);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    cake.Img.CopyTo(stream);
                }
                newCake.Photo = cake.Img.FileName;
                Store.Catalog.Add(newCake);
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
    }
}
