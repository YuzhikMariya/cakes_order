﻿using System.Collections.Generic;

namespace server.Models
{

    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string phone { get; set; }
        public List<CartItem> History { get; set; }
    }
}