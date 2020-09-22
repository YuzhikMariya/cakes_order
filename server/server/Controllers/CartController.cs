using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;
using server.Data;
using Microsoft.AspNetCore.Authorization;
using server.Models.ResponseModels;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "User")]
    public class CartController : Controller
    {

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

        History getUserHistory(string userEmail)
        {
            string historyId = "";
            foreach (User u in Store.Users)
            {
                if (u.Email == userEmail)
                {
                    historyId = u.HistoryID;
                    break;
                }
            }
            foreach (History history in Store.Histories)
            {
                if (history.Id == historyId)
                {
                    return history;
                }
            }
            return null;
        }

        Cake getCakeById(string cakeId)
        {
            foreach (Cake cake in Store.Catalog)
            {
                if (cake.Id == cakeId)
                {
                    return cake;
                }
            }
            return null;
        }

        [HttpGet]
        [Authorize]
        public List<ListItem> Get()
        {
            string userEmail = HttpContext.User.Identity.Name;
            List<ListItem> resultCart = new List<ListItem>();
            foreach(CartItem cartItem in getUserCart(userEmail).CartList)
            {
                resultCart.Add(new ListItem { Cake = getCakeById(cartItem.CakeId), Count = cartItem.Count });
            }
            return resultCart;
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post(AddedHistory addedHistory)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = getUserCart(userEmail);
            History history = getUserHistory(userEmail);
            if ((cart != null) && (history != null))
            {
                var req = JsonConvert.DeserializeObject<List<AddedHistoryItem>>(addedHistory.List);
                List<CartItem> response = new List<CartItem>();
                foreach (var item in req)
                {
                    foreach (CartItem cake in cart.CartList)
                    {
                        if (cake.CakeId == item.Id)
                        {
                            CartItem tempCake = new CartItem { CakeId = cake.CakeId, Count = item.Count };

                            history.HistoryList.Add(tempCake);
                            response.Add(tempCake);
                        }
                    }
                }

                foreach (var cake in cart.CartList)
                {
                    for (int i = 0; i < cake.Count; i++)
                    {
                        Store.CookingList.ListOfId.Add(cake.CakeId);
                    }

                }
                cart.CartList.Clear();

                return Ok(response);
            }
            return NotFound();
            
        }


        [Route("changeCount")]
        [HttpPost]
        [Authorize]
        public IActionResult Post(string id, int count)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = getUserCart(userEmail);
            foreach (CartItem cartItem in cart.CartList)
            {
                if (cartItem.CakeId == id)
                {
                    cartItem.Count = count;
                    return Ok();
                }
            }
            return NotFound();

        }


        [HttpDelete("{id}")]
        [Authorize]
        public IActionResult Delete(string id)
        {
            string userEmail = HttpContext.User.Identity.Name;
            Cart cart = getUserCart(userEmail);
            foreach (CartItem cartItem in cart.CartList)
            {
                if (cartItem.CakeId == id)
                {
                    cart.CartList.Remove(cartItem);
                    return Ok();
                }
            }
            return NotFound();
        }
    }
}
