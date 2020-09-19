using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;
using server.Data;
using Microsoft.AspNetCore.Authorization;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {

        [HttpGet]
        [Authorize]
        public Cart Get()
        {
            return Store.Cart;
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post(AddedHistory addedHistory)
        {

            var req = JsonConvert.DeserializeObject<List<AddedHistoryItem>>(addedHistory.List);
            List<CartItem> response = new List<CartItem>();
            foreach (var item in req)
            {
                foreach (CartItem cake in Store.Cart.CartList)
                {
                    if (cake.Cake.Id == item.Id)
                    {
                        CartItem tempCake = new CartItem { Cake = cake.Cake, Count = item.Count };
                        Store.History.Add(tempCake);
                        response.Add(tempCake);
                    }
                }
            }

            Store.Cart.CartList.Clear();

            return Ok(response);
        }
    }
}
