using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class History
    {
        public string Id { get; set; }
        public List<CartItem> HistoryList { get; set; }
    }
}
