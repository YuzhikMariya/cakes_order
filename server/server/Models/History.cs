using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class History
    {
        [Key]
        public long Id { get; set; }
        public string CakeId { get; set; }
        public string UserId { get; set; }
        public int Count { get; set; }
    }
}
