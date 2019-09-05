using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Google.Cloud.Translation.V2;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TranslateController : ControllerBase
    {

        // GET api/values
        [HttpPost]
        public ActionResult<string> Translate([FromBody] TranslateModel model)
        {
            var result = TranslateText(model.text,model.data.target,model.data.source);
            return result;
        }

        public string TranslateText(string text, string targetLang, string sourceLang)
        {
            TranslationClient client = TranslationClient.Create();
            var response = client.TranslateText(
                text: text,
                targetLanguage: targetLang,
                sourceLanguage: sourceLang); 
            return response.TranslatedText;
        }
    }
    public class TranslateModel
    {
        public string text { get; set; }
        public TranslateData data { get; set; }
        
    }
    public class TranslateData
    {
        public string source { get; set; }
        public string target { get; set; }
    }
}
