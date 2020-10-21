using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLHistoryRepository : IRepository<History, long>
    {
        private ApplicationContext db;

        public MSSQLHistoryRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<History> GetAll()
        {
            return db.Histories;
        }
        public History GetById(long id)
        {
            return db.Histories.FirstOrDefault(c => c.Id == id);
        }
        public History GetByUserId(string id)
        {
            return db.Histories.FirstOrDefault(c => c.UserId == id);
        }
        public void Create(History history)
        {
            db.Histories.Add(history);
        }
        public void Update(History history)
        {
            db.Histories.Update(history);
        }
        public void Delete(History history)
        {
            db.Histories.Remove(history);
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
