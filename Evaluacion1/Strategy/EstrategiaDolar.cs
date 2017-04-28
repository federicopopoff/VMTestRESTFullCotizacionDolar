using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Evaluacion1.Strategy
{
    public class EstrategiaDolar :Estrategia
    {
        public override moneda responder()
        {
            toolBox generalTool = new toolBox();
            return generalTool.getData("https://www.bancoprovincia.com.ar/Principal/Dolar");
        }
    }
}