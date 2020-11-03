using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Interfaces;
using server.Models;

namespace server.DBRepositories
{
    public class MSSQLCakeRepository : IRepository<Cake, string>
    {
        private ApplicationContext db;

        public MSSQLCakeRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<Cake> GetAll()
        {
            return db.Catalog;
        }
        public Cake GetById(string id)
        {
            return db.Catalog.FirstOrDefault(c => c.Id == id);
        }
        public List<Cake> GetByIdArr(List<string> ids)
        {
            List<Cake> result = db.Catalog.Where(c => ids.Contains(c.Id)).ToList();
            return result;
        }
        public void Create(Cake cake)
        {
            db.Catalog.Add(cake);
        }
        public void Update(Cake cake)
        {
            db.Catalog.Update(cake);
        }
        public void Delete(Cake cake)
        {
            db.Catalog.Remove(cake);
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
