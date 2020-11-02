using MailKit.Security;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.HelperClasses
{
    static public class EmailSender
    {
        static public void SendEmail(string from, string to, string name, string cakeDescription, string login, string password)
        {
            MimeMessage message = new MimeMessage();
            message.From.Add(new MailboxAddress("MasterCake", from));
            message.To.Add(new MailboxAddress("", to));
            message.Subject = "New cake in MasterCake";
            message.Body = new BodyBuilder()
            {
                HtmlBody =
                "<div " +
                    "<div style=\"padding-bottom: 5%;\"><em>Dear " + name + ",</em></div>" +
                    "<b style=\"color: purple;\">We have a new cake in our catalog especially for you!</b>" +
                    "<div style=\"padding: 10% 0;\"><em>" + cakeDescription + "</em></div>" +
                    "<b>Hurry to order!</b>" +
                    "<div style=\"padding-top: 20%;\"><em>With love, your MasterCake)</em></div>" +
                "</div>"
            }.ToMessageBody();

            using (MailKit.Net.Smtp.SmtpClient client = new MailKit.Net.Smtp.SmtpClient())
            {
                client.Connect("smtp.mail.ru", 25, SecureSocketOptions.StartTls);
                client.Authenticate(login, password);
                client.Send(message);

                client.Disconnect(true);
            }
        }
    }
}
