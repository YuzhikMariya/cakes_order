using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLCartRepository : IRepository<Cart, long>
    {
        private ApplicationContext db;

        public MSSQLCartRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<Cart> GetAll()
        {
            return db.Carts;
        }
        public Cart GetById(long id)
        {
            return db.Carts.FirstOrDefault(c => c.Id == id);
        }
        public Cart GetCartByUserEmail(string email, string id)
        {
            return db.Carts.FirstOrDefault(c => c.UserId == email && c.CakeId == id);
        }
        public void Create(Cart cart)
        {
            db.Carts.Add(cart);
        }
        public void Update(Cart cart)
        {
            db.Carts.Update(cart);
        }
        public void Delete(Cart cart)
        {
            db.Carts.Remove(cart);
        }
        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
