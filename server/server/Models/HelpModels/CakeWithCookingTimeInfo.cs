using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.HelpModels
{
    public class CakeWithCookingTimeInfo
    {
        public Cake CakeInfo { get; set; }
        public bool IsCooking { get; set; }
        public TimeSpan TimeWithCookingAll { get; set; }
    }
}
