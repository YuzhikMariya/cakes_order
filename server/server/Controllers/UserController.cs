using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;
using server.Data;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {


        [HttpGet]
        public User Get()
        {
            return Store.User;
        }


    }
}
