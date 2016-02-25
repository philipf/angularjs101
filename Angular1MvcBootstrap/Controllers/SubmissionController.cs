using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular1MvcBootstrap.Controllers
{
    public class SubmissionController : ApiController
    {
        [HttpGet]
        public IEnumerable<string> Countries()
        {
            return new [] { "USA", "South Africa", "Sudan", "Singapore" };
        }

        // GET: api/Submission/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Submission
        public void Post([FromBody]string value)
        {
        }

    }
}
