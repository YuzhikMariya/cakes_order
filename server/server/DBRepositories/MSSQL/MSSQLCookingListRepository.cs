using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLCookingListRepository : IRepository<CookingCake, long>
    {
        private ApplicationContext db;

        public MSSQLCookingListRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<CookingCake> GetAll()
        {
            return db.CookingList;
        }
        public CookingCake GetById(long id)
        {
            return db.CookingList.FirstOrDefault(c => c.Id == id);
        }
        public void Create(CookingCake cake)
        {
            db.CookingList.Add(cake);
        }
        public void Update(CookingCake cake)
        {
            db.CookingList.Update(cake);
        }
        public void Delete(CookingCake cake)
        {
            db.CookingList.Remove(cake);
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
