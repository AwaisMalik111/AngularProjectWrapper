using AngularApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class APITestController : ControllerBase
    {
        [HttpPost("TestMethod")]
        public void test([FromBody] TestModel obj) {
            return;
        }
        [HttpGet("TestGet")]
        public void TestGet() {
            return;
        }
    }
}
