using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DBRepositories
{
    public class UnitOfWork
    {
        private ApplicationContext db;
        private MSSQLAdminRepository adminRepository;
        private MSSQLCakeRepository cakeRepository;
        private MSSQLCartRepository cartRepository;
        private MSSQLCookingListRepository cookingListRepository;
        private MSSQLHistoryRepository historyRepository;
        private MSSQLShopInfoRepository shopInfoRepository;
        private MSSQLUserRepository userRepository;

        public UnitOfWork(ApplicationContext context)
        {
            db = context;
        }

        public MSSQLAdminRepository Admins
        {
            get
            {
                if(adminRepository == null)
                {
                    adminRepository = new MSSQLAdminRepository(db);
                }
                return adminRepository;
            }
        }

        public MSSQLUserRepository Users
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new MSSQLUserRepository(db);
                }
                return userRepository;
            }
        }

        public MSSQLCakeRepository Catalog
        {
            get
            {
                if (cakeRepository == null)
                {
                    cakeRepository = new MSSQLCakeRepository(db);
                }
                return cakeRepository;
            }
        }

        public MSSQLCartRepository Carts
        {
            get
            {
                if (cartRepository == null)
                {
                    cartRepository = new MSSQLCartRepository(db);
                }
                return cartRepository;
            }
        }

        public MSSQLHistoryRepository Histories
        {
            get
            {
                if (historyRepository == null)
                {
                    historyRepository = new MSSQLHistoryRepository(db);
                }
                return historyRepository;
            }
        }

        public MSSQLShopInfoRepository ShopInfo
        {
            get
            {
                if (shopInfoRepository == null)
                {
                    shopInfoRepository = new MSSQLShopInfoRepository(db);
                }
                return shopInfoRepository;
            }
        }

        public MSSQLCookingListRepository CookingList
        {
            get
            {
                if (cookingListRepository == null)
                {
                    cookingListRepository = new MSSQLCookingListRepository(db);
                }
                return cookingListRepository;
            }
        }

    }
}
