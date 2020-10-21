using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLShopInfoRepository : IRepository<ShopInfo, string>
    {
        private ApplicationContext db;

        public MSSQLShopInfoRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<ShopInfo> GetAll()
        {
            return db.ShopInfo;
        }
        public ShopInfo GetById(string id)
        {
            return null;
        }
        public ShopInfo GetByLogin(string login)
        {
            return db.ShopInfo.FirstOrDefault(c => c.Login == login);
        }
        public void Create(ShopInfo info)
        {
            db.ShopInfo.Add(info);
        }
        public void Update(ShopInfo info)
        {
            db.ShopInfo.Update(info);
        }
        public void Delete(ShopInfo info)
        {
            db.ShopInfo.Remove(info);
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
