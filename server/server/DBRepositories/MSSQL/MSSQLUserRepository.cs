using server.Interfaces;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class MSSQLUserRepository : IRepository<User, string>
    {
        private ApplicationContext db;

        public MSSQLUserRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<User> GetAll()
        {
            return db.Users;
        }
        public User GetById(string id)
        {
            return null;
        }
        public User GetByEmail(string id)
        {
            return db.Users.FirstOrDefault(c => c.Email == id);
        }
        public void Create(User user)
        {
            db.Users.Add(user);
        }
        public void Update(User user)
        {
            db.Users.Update(user);
        }
        public void Delete(User user)
        {
            db.Users.Remove(user);
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
