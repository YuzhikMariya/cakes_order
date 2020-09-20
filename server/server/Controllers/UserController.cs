using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;
using server.Data;
using Microsoft.AspNetCore.Authorization;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {


        [Authorize]
        [HttpGet]
        public User Get()
        {
            return Store.User;
        }


    }
}
