using MailKit.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using server.DBRepositories;
using server.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    public class AdminController: Controller
    {

        private UnitOfWork db;
        public AdminController(ApplicationContext context)
        {
            db = new UnitOfWork(context);
        }

        static void SendEmail(string from, string to, string name, string cakeDescription, string login, string password)
        {       
            MimeMessage message = new MimeMessage();
            message.From.Add(new MailboxAddress("MasterCake", from));
            message.To.Add(new MailboxAddress("", to));
            message.Subject = "New cake in MasterCake";
            message.Body = new BodyBuilder() { HtmlBody = 
                "<div " +
                    "<div style=\"padding-bottom: 5%;\"><em>Dear " + name  + ",</em></div>" +
                    "<b style=\"color: purple;\">We have a new cake in our catalog especially for you!</b>" +
                    "<div style=\"padding: 10% 0;\"><em>" + cakeDescription + "</em></div>" + 
                    "<b>Hurry to order!</b>" +
                    "<div style=\"padding-top: 20%;\"><em>With love, your MasterCake)</em></div>" +
                "</div>" }.ToMessageBody(); 

            using (MailKit.Net.Smtp.SmtpClient client = new MailKit.Net.Smtp.SmtpClient())
            {
                client.Connect("smtp.mail.ru", 25, SecureSocketOptions.StartTls);
                client.Authenticate(login, password);
                client.Send(message);

                client.Disconnect(true);
            }
        }

        [HttpPost]
        [Authorize]
        public IActionResult Post(AddedCake cake)
        {
            char separator = System.Globalization.CultureInfo.CurrentCulture.NumberFormat.CurrencyDecimalSeparator[0];
            string stringPrice = cake.Price.Replace('.', separator);
            decimal price = Convert.ToDecimal(stringPrice);
            Cake newCake = new Cake
            {
                Id = Guid.NewGuid().ToString(),
                Title = cake.Title,
                Price = price,
                Time = TimeSpan.Parse(cake.Time),
                Description = cake.Description
            };

            try
            {
                string path, 
                    cakePhotoName = cake.Img.FileName, 
                    folderPath = Directory.GetCurrentDirectory() + "wwwroot" + "images";
                if (System.IO.File.Exists(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", cakePhotoName)))
                {
                    cakePhotoName = DateTime.Now.ToString("MMddHHmmss") + cake.Img.FileName;
                }
                path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", cakePhotoName);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    cake.Img.CopyTo(stream);
                }
                List<User> users = db.Users.GetAll().Where(u => u.IsAdmin).ToList();
                ShopInfo shopInfo = db.ShopInfo.GetAll().FirstOrDefault();
                foreach(var u in users)
                {
                    System.Diagnostics.Debug.WriteLine(u.Name);
                    //SendEmail(shopInfo.Login, u.Email, u.Name, cake.Description, shopInfo.Login, shopInfo.Password);
                }
                
                newCake.Photo = cakePhotoName;
                db.Catalog.Create(newCake);
                db.Catalog.Save(); 
                return Ok();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
    }
}
