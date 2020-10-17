using server.Models.HelpModels;

namespace server.Models
{
    public class CatalogWithTotalCount
    {
        public CakeWithCookingTimeInfo[] Catalog { get; set; }
        public int TotalCount {get;set;}
    }
}
