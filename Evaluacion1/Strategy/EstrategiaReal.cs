using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Web;
using System.Web;

namespace Evaluacion1.Strategy
{
    public class EstrategiaReal: Estrategia
    {
        public override moneda responder()
        {
            throw new WebFaultException(System.Net.HttpStatusCode.Unauthorized);
        }
    }
}