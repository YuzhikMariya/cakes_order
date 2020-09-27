using System;
using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Cake
    {
        [Key]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public TimeSpan Time { get; set; }
        public string Photo { get; set; }

    }
}
