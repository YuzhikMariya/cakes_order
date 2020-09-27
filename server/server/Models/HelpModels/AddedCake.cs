using Microsoft.AspNetCore.Http;

namespace server.Models
{
    public class AddedCake
    {
        public string Title { get; set; }
        public string Time { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }

        public IFormFile Img { get; set; }
    }
}
