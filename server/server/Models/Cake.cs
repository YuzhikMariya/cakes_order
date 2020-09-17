using System;

namespace server.Models
{
    public class Cake
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public TimeSpan Time { get; set; }
        public string Photo { get; set; }

    }
}
