using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactForm.Api.DTOs
{
    public class GenericResponse<T>
    {
        public bool Success { get; set; }
        public List<string> Errors { get; set; } = new List<string>();
        public T Data { get; set; }
    }
}
