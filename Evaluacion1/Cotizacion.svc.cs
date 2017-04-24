using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Web;
using System.Net;

namespace Evaluacion1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Cotizacion" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Cotizacion.svc or Cotizacion.svc.cs at the Solution Explorer and start debugging.
    public class Cotizacion : ICotizacion
    {
        //metodo de comparacion de divisa
        public bool ComparacionStrings(string moneda, string divisa)
        {
            return divisa.Equals(moneda,StringComparison.OrdinalIgnoreCase);
        }
        //metodo de conexion con consumo de datos
        public moneda getData(string sUrlRequest)
        {
            var dataBanca = new WebClient().DownloadString(sUrlRequest);
            string[] data = dataBanca.Split('"');
            moneda Divisa = new moneda(Convert.ToString( data[1]), Convert.ToString(data[3]), Convert.ToString(data[5]));
            return Divisa;
        }
        //metodo de control de dominio para manipulacion restfull
        public  moneda getInformationWeb(string tipoMoneda)
        {
            if (ComparacionStrings(tipoMoneda,"dolar"))
            {
                return getData("https://www.bancoprovincia.com.ar/Principal/Dolar");
            }
            else 
            {
                if (ComparacionStrings(tipoMoneda, "real") || ComparacionStrings(tipoMoneda, "pesos"))
                {
                    throw new WebFaultException(System.Net.HttpStatusCode.Unauthorized);
                }
                else
                {
                    return new moneda("0", "0", "N/A");
                }
            }
        }
    }
    
}
