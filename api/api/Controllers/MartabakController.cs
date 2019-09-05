using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MartabakController : Controller
    {
        [HttpPost("boil")]
        public ActionResult<string> BoilNoodle()
        {
            string noodleId = Guid.NewGuid().ToString();
            Console.WriteLine("Boiling Noodle");
            
            // Code to exec boil noodle


            Console.WriteLine("Boiled");
            return noodleId;
        }
        [HttpPost("stir")]
        public ActionResult<string> StirNoodle(string noodleId)
        {
            Console.WriteLine("Stirring Noodle");

            // Code to exec stir noodle


            Console.WriteLine("Stirred");
            return noodleId;
        }
        [HttpPost("heat")]
        public ActionResult<bool> HeatFryingPan()
        {
            Console.WriteLine("Heating Frying Pan");

            // Code to verify frying pan heat


            Console.WriteLine("Done");
            return true;
        }
        [HttpPost("fry")]
        public ActionResult<string> FryNoodle(string noodleId)
        {
            Console.WriteLine("Frying Noodle");

            // Code to exec fry noodle


            Console.WriteLine("Fried");
            return noodleId;
        }
        [HttpPost("serve")]
        public ActionResult<string> ServeNoodle(string noodleId)
        {
            Console.WriteLine("Serving Noodle");

            // Code to exec serve noodle


            Console.WriteLine("Served");
            return noodleId;
        }
    }
}