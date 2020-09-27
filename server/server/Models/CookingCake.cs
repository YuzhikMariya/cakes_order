using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class CookingCake
    {
        [Key]
        public long Id { get; set; }
        public string CakeId { get; set; }
    }
}
