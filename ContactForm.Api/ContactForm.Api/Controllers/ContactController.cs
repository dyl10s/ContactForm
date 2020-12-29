using ContactForm.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactForm.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> SubmitForm(FormDetails request)
        {
            var results = new GenericResponse<string>();

            // Save data
            await System.IO.File.WriteAllTextAsync(Guid.NewGuid().ToString() + ".txt", request.ToString());

            results.Success = true;
            results.Data = "Your message has been sent successfully";
            return Ok(results);
        }
    }
}
