using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace server.Models
{

    public class User
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public bool IsAdmin { get; set; }
    }
}
