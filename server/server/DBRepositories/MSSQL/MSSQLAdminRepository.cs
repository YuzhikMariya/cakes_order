using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLAdminRepository : IRepository<Admin, string>
    {
        private ApplicationContext db;

        public MSSQLAdminRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<Admin> GetAll()
        {
            return db.Admins;
        }
        public Admin GetById(string id)
        {
            return null;
        }
        public Admin GetByEmail(string email)
        {
            return db.Admins.FirstOrDefault(c => c.Email == email);
        }
        public void Create(Admin admin)
        {
            db.Admins.Add(admin);
        }
        public void Update(Admin admin)
        {
            db.Admins.Update(admin);
        }
        public void Delete(Admin admin)
        {
            db.Admins.Remove(admin);
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
