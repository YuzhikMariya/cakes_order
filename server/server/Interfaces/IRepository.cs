using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces
{
    interface IRepository<T, U> : IDisposable
        where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(U id);
        void Create(T item);
        void Update(T item);
        void Delete(T item);
        void Save(); 
    }
}
