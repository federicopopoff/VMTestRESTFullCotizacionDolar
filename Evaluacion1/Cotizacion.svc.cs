using System;
using System.Drawing;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Web;
using System.Net;
using System.Windows.Forms;
using System.Resources;
using System.IO;

namespace Evaluacion1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Cotizacion" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Cotizacion.svc or Cotizacion.svc.cs at the Solution Explorer and start debugging.
    public class Cotizacion : ICotizacion
    {
      

        //metodo de control de dominio para manipulacion restfull
        public  moneda getInformationWeb(string tipoMoneda)
        {
            toolBox generalTool = new toolBox();
            if (generalTool.ComparacionStrings(tipoMoneda,"dolar"))
            {
                return generalTool.getData("https://www.bancoprovincia.com.ar/Principal/Dolar");
            }
            else 
            {
                if (generalTool.ComparacionStrings(tipoMoneda, "real") || generalTool.ComparacionStrings(tipoMoneda, "pesos"))
                {
                    throw new WebFaultException(System.Net.HttpStatusCode.Unauthorized);
                }
                else
                {
                    return new moneda("0", "0", "N/A");
                }
            }
        }
        //metodo de control de dominio para manipulacion restfull mediante generacion de datos mock
        public moneda getInformationWebTest(string tipoMoneda, string variabilidad)
        {
            toolBox generalTool = new toolBox();
            tipoMoneda = tipoMoneda.ToLower();
            string aux;
            if (generalTool.ComparacionStrings(tipoMoneda, "dolar"))
            {
                generalTool.dolar = generalTool.getVariation(generalTool.dolar, variabilidad);
                aux = generalTool.dolar.ToString();
                return new moneda("0", aux, "N/A");

            }
            else
            {
                if (generalTool.ComparacionStrings(tipoMoneda, "real"))
                {
                    generalTool.real = generalTool.getVariation(generalTool.real, variabilidad);
                    aux = generalTool.real.ToString();
                    return new moneda("0", aux, "N/A");
                }
                else
                {
                    generalTool.pesos = generalTool.getVariation(generalTool.pesos, variabilidad);
                    aux = generalTool.pesos.ToString();
                    return new moneda("0", aux, "N/A");
                }
            }
        }
    }
}
