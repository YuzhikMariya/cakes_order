using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class CatalogWithTotalCount
    {
        public Cake[] Catalog { get; set; }
        public int TotalCount {get;set;}
    }
}
