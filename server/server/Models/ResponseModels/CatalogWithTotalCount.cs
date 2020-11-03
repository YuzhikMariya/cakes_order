using server.Models.HelpModels;
using System.Collections.Generic;

namespace server.Models
{
    public class CatalogWithTotalCount
    {
        public List<CakeWithCookingTimeInfo> Catalog { get; set; }
        public int TotalCount {get;set;}
    }
}
