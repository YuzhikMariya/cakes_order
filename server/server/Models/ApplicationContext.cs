using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<History> Histories { get; set; }
        public DbSet<Cake> Catalog { get; set; }
        public DbSet<CookingCake> CookingList { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
       // {
           // modelBuilder.Entity<Cart>()
             //   .HasNoKey();
            //.HasKey(c => new { c.CakeId, c.UserId });

           // modelBuilder.Entity<History>()
             //   .HasNoKey();
                //.HasKey(h => new { h.CakeId, h.UserId });
        //}

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

    }
}
