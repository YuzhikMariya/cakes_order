﻿using System.Collections.Generic;

namespace server.Models
{

    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string HistoryID { get; set; }

        public string CartID{ get; set; }
    }
}
