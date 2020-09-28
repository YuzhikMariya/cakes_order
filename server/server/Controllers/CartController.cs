using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using server.Models.ResponseModels;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "User")]
    public class CartController : Controller
    {
        private ApplicationContext db;
        public CartController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Authorize]
        public List<ListItem> Get()
        {
            string userEmail = HttpContext.User.Identity.Name;
            List<Cart> userCart = new List<Cart>();
            userCart = db.Carts.Where(c => c.UserId == userEmail).ToList();

            List<ListItem> resultCart = new List<ListItem>();
            foreach(Cart cartItem in userCart)
            {
                Cake cake = db.Catalog.FirstOrDefault(c => c.Id == cartItem.CakeId);
                resultCart.Add(new ListItem { Cake = cake, Count = cartItem.Count });
            }
            return resultCart;
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post(AddedHistory addedHistory)
        {
            string userEmail = HttpContext.User.Identity.Name;

            List<Cart> userCart = new List<Cart>();
            userCart = db.Carts.Where(c => c.UserId == userEmail).ToList();

            List<History> userHistory = new List<History>();
            userHistory = db.Histories.Where(h => h.UserId == userEmail).ToList();

            db.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            if ((userCart != null) && (userHistory != null))
            {
                var req = JsonConvert.DeserializeObject<List<AddedHistoryItem>>(addedHistory.List);
                List<ListItem> response = new List<ListItem>();
                foreach (var item in req)
                {
                    Cake cake = db.Catalog.FirstOrDefault(c => c.Id == item.Id);
                    ListItem tempCake = new ListItem { Cake = cake, Count = item.Count };
                    db.Histories.Add(new History { UserId = userEmail, CakeId = item.Id, Count = item.Count});
                    db.SaveChanges();
                    response.Add(tempCake);
                }

                foreach (var c in userCart)
                {
                    for (int i = 0; i < c.Count; i++)
                    {
                        CookingCake cookingCake = new CookingCake { CakeId = c.CakeId };
                        db.CookingList.Add(cookingCake);

                    }

                }
                db.SaveChanges();
                foreach (var c in userCart)
                {
                    db.Carts.Remove(c);
                }
                db.SaveChanges();

                return Ok(response);
            }
            return NotFound();
            
        }


        [Route("changeCount")]
        [HttpPost]
        public IActionResult Post(string id, int count)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = db.Carts.FirstOrDefault(c => c.UserId == userEmail && c.CakeId == id);
            if(cart != null)
            {
                cart.Count = count;
                db.Carts.Update(cart);
                db.SaveChanges();
                return Ok();
            } 
            return NotFound();
        }


        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(string id)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = db.Carts.FirstOrDefault(cart => cart.UserId == userEmail);
            if(cart != null)
            {
                db.Carts.Remove(cart);
                db.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
    }
}
