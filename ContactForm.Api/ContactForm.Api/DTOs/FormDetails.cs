using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactForm.Api.DTOs
{
    public class FormDetails
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Message { get; set; }

        public override string ToString()
        {
            return
                $"Name:    {FirstName} {LastName}\n" +
                $"Email:   {Email}\n" +
                $"Message: \n{Message}\n";
        }
    }
}
