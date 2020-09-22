using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class AuthResponse
    {
        public static readonly string Admin = "admin";
        public static readonly string User = "user";
        public static readonly string Guest = "";
        public int Status { get; set; }
        public string Role { get; set; }
    }
}
