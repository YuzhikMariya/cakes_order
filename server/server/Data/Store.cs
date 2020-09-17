using server.Models;
using System;
using System.Collections.Generic;

namespace server.Data
{
    public class Store
    {
        static List<CartItem> list = new List<CartItem> {
                new CartItem { Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Cool cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                Count = 12
                },
                new CartItem { Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="the BesT Cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                Count = 2
                },
                new CartItem { Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Cool cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                Count = 3
                },
                new CartItem { Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Cake cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                Count = 7
                }
            };
        public static Cart Cart = new Cart { Id = Guid.NewGuid().ToString(), CartList = list };

        public static List<CartItem> History = new List<CartItem> { new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Cool cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 10 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Cake cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 12 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="cacacakekeke",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 13 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iPhone 7",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 14 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Oh, what a cake?!",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 15 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Super cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 16 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="Top cake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 17 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iCake",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 18 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iCake 7",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 19 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iCake 7S",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 20 },
                new CartItem {Cake = new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iCake 11 Pro",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                }, Count = 21 }
            };

        public static User User = new User
        {
            Id = Guid.NewGuid().ToString(),
            Name = "Diana",
            Surname = "Stadnik",
            Email = "d.stadnik@mail.ru",
            phone = "+375296544563",
            History = History
        };



        public static List<Cake> Catalog = new List<Cake>
            {
                new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iPhone 1",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                new Cake { Id = Guid.NewGuid().ToString(),
                    Title="iPhone 1",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price=52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake2.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 3",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake3.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 4",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake4.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 5",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake5.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 6",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake6.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 7",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake7.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 8",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake8.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 9",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake9.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 10",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake10.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 11",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake11.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 12",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake12.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 13",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake1.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 14",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake2.png"
                },
                new Cake
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone 15",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Price = 52000,
                    Time = new TimeSpan(2, 14, 18),
                    Photo = "cake3.png"
                }
        };
    };
}
