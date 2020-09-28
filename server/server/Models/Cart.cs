using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Cart
    {
        [Key]
        public long Id { get; set; }
        public string CakeId { get; set; }
        public string UserId { get; set; }
        public int Count { get; set; }
    }
}
