using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SwaggerSample.Controllers
{
    /// <summary>
    /// 這是要 Demo Swagger 的 Sample Controller
    /// </summary>
    public class SampleController : ApiController
    {
        /// <summary>
        /// 取得 Sample 文字
        /// </summary>
        /// <returns></returns>
        public IEnumerable<string> Get()
        {
            return new string[] { "Swagger", "Sample" };
        }
    }
}
