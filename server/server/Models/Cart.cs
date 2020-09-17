using System.Collections.Generic;

namespace server.Models
{
    public class Cart
    {
        public string Id { get; set; }
        public List<CartItem> CartList { get; set; }
    }
}
