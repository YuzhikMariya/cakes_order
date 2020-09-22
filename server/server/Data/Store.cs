using server.Models;
using System;
using System.Collections.Generic;

namespace server.Data
{
    public class Store
    {

        public static List<Cart> Carts = new List<Cart> {
            new Cart{Id = "41FD560D-4B69-483E-A39E-ED79F13ADD22",
                     CartList = new List<CartItem> {
                        new CartItem { CakeId = "0F94EED1-3DD6-42DE-9FBF-8DCA47C575DC",
                        Count = 12
                        },
                        new CartItem { CakeId = "DA245D2E-543E-43FB-83AC-E5D7C5A53C24",
                        Count = 2
                        },
                        new CartItem { CakeId = "4452C6D9-FCB6-47E2-BE2E-141022903A17",
                        Count = 3
                        },
                        new CartItem { CakeId = "E9B3EB03-301B-4DD2-859E-3E4D8621782C",
                        Count = 7
                        }
                     }
            },
            new Cart{Id = "F69C56BA-EABD-415E-876C-A968DBF354AB",
                     CartList = new List<CartItem>()
            }
        };

        public static List<History> Histories = new List<History>{
            new History{Id = "55FCC699-2847-48AF-BAFE-5EC4FFB8FC64",
                        HistoryList = new List<CartItem>()},
            new History{Id = "4BB92FEC-51A1-48BD-9D05-2292E4E65458",
                        HistoryList = new List<CartItem> {
                            new CartItem{CakeId = "E9B3EB03-301B-4DD2-859E-3E4D8621782C", Count = 4},
                            new CartItem{CakeId = "E8BEC1E7-DC8A-446F-B0F5-0B7D60B98420", Count = 6},
                            new CartItem{CakeId = "FEC32E0D-B214-492B-8F70-E913E7BB0385", Count = 11},
                        },
            }
        };

        public static List<Cake> Catalog = new List<Cake>
            {
                new Cake { Id = "E9B3EB03-301B-4DD2-859E-3E4D8621782C",
                    Title="iPhone 1",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                new Cake { Id = "E8BEC1E7-DC8A-446F-B0F5-0B7D60B98420",
                    Title="iPhone 1",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake2.png"
                },
                new Cake
                {
                    Id = "FEC32E0D-B214-492B-8F70-E913E7BB0385",
                    Title = "iPhone 3",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake3.png"
                },
                new Cake
                {
                    Id = "D62D328C-E9F8-4C7F-A471-1EAAA420E895",
                    Title = "iPhone 4",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake4.png"
                },
                new Cake
                {
                    Id = "349F2CE8-3171-460F-ABD1-C79ACFF8912E",
                    Title = "iPhone 5",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake5.png"
                },
                new Cake
                {
                    Id = "0E86EAB6-6DB5-467A-8972-B3BA263FA975",
                    Title = "iPhone 6",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake6.png"
                },
                new Cake
                {
                    Id = "18AF4137-465D-457A-B7BC-63F7A53B8E86",
                    Title = "iPhone 7",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake7.png"
                },
                new Cake
                {
                    Id = "0F94EED1-3DD6-42DE-9FBF-8DCA47C575DC",
                    Title = "iPhone 8",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake8.png"
                },
                new Cake
                {
                    Id = "DA245D2E-543E-43FB-83AC-E5D7C5A53C24",
                    Title = "iPhone 9",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake9.png"
                },
                new Cake
                {
                    Id = "4452C6D9-FCB6-47E2-BE2E-141022903A17",
                    Title = "iPhone 10",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake10.png"
                },
                new Cake
                {
                    Id = "3B4FA946-9A6C-4BCB-A0A1-75B263347496",
                    Title = "iPhone 11",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake11.png"
                },
                new Cake
                {
                    Id = "A722F8C3-4CB1-407A-8AFF-40205C2A3BD3",
                    Title = "iPhone 12",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake12.png"
                },
                new Cake
                {
                    Id = "DE8E992C-C883-4A93-9D05-857D797A22FF",
                    Title = "iPhone 13",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                new Cake
                {
                    Id = "A91D5B09-4D55-4FB8-AE36-6F8BB43DE6E7",
                    Title = "iPhone 14",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake2.png"
                },
                new Cake
                {
                    Id = "CAF8EC84-5639-4C9A-B7CD-33358A7225EC",
                    Title = "iPhone 15",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake3.png"
                }
        };

        public static List<User> Users = new List<User> { 
            new User { 
                Id = Guid.NewGuid().ToString(), 
                Email = "mari.yuzhik@mail.ru",
                Password = "7fbf3e78b810ab6442596b93fc730fdf68092b6e",
                Name = "Maryia", 
                Phone = "+375296965625", 
                Surname = "Yuzhik", 
                HistoryID = "55FCC699-2847-48AF-BAFE-5EC4FFB8FC64",
                CartID = "41FD560D-4B69-483E-A39E-ED79F13ADD22"
            },
            new User {
                Id = Guid.NewGuid().ToString(),
                Email = "d.stadnik@mail.ru",
                Password = "4909510e4b87f7d50ce802608fd6699f61d59a90",
                Name = "Diana",
                Phone = "+375336650451",
                Surname = "Stadnik",
                HistoryID = "4BB92FEC-51A1-48BD-9D05-2292E4E65458",
                CartID = "F69C56BA-EABD-415E-876C-A968DBF354AB"
            }
        };

        public static List<Admin> Admins = new List<Admin> { 
            new Admin{Email = "mashunya.ezhik@gmail.com", Password = "6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2"},
            new Admin{Email = "admin@mail.ru", Password = "d033e22ae348aeb5660fc2140aec35850c4da997"}
        };

        public static CookingList CookingList = new CookingList { ListOfId =  new List<string>()};
    };
}
