﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class ShopInfo
    {
        [Key]
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
