using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.ResponseModels
{
    public class Account
    {
        public User User { get; set; }
        public List<ListItem> History { get; set; }
    }
}
