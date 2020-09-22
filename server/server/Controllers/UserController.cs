using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Data;
using Microsoft.AspNetCore.Authorization;
using server.Models.ResponseModels;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "User")]
    public class UserController : Controller
    {

        Cake getCakeById(string cakeId)
        {
            foreach(Cake cake in Store.Catalog)
            {
                if(cake.Id == cakeId)
                {
                    return cake;
                }
            }
            return null;
        }

        Models.User getUserByEmail(string userEmail)
        {
            foreach (Models.User user in Store.Users)
            {
                if (user.Email == userEmail)
                {
                    return user;
                }
            }
            return null;
        }

        History getHistoryById(string historyId)
        {
            foreach (History history in Store.Histories)
            {
                if (history.Id == historyId)
                {
                    return history;
                }
            }
            return null;
        }

        [Authorize]
        [HttpGet]
        public Models.ResponseModels.Account Get()
        {
            string email = HttpContext.User.Identity.Name;
            User user = getUserByEmail(email);
            if(user != null)
            {
                History history = getHistoryById(user.HistoryID);
                if(history != null)
                {
                    List<ListItem> resultHistory = new List<ListItem>();
                    foreach(CartItem historyItem in history.HistoryList)
                    {
                        ListItem listItem = new ListItem { Cake = getCakeById(historyItem.CakeId), Count = historyItem.Count };
                        resultHistory.Add(listItem);
                    }
                    return new Account { User = user, History = resultHistory };
                }
                return new Account { User = user, History = null};
            }
            return new Account { User = null, History = null};

        }


    }
}
