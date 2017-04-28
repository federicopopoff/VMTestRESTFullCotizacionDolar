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

namespace Evaluacion1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Cotizacion" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Cotizacion.svc or Cotizacion.svc.cs at the Solution Explorer and start debugging.
    public class Cotizacion : ICotizacion
    {
        // cambio USD to ARS
        //protected double dolar = 15.7;
        double dolar;
        // cambio ARS to BRL
        public double real = 0.205;
        // cambio ARS to USD
        public double pesos = 0.064;

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
        //Obtener variacion de numero
        public double getVariation(double numero, string variabilidad)
        {
            Random rnd = new Random();
            int plus = rnd.Next(0, 2);
            switch (variabilidad)
            {
                case "muchaPrecision":
                    if (plus == 0)
                    {
                        numero = numero - 0.001;
                    }
                    else
                    {
                        numero = numero + 0.001;
                    }
                    break;
                case "precision":
                    if (plus == 0)
                    {
                        numero = numero - 0.01;
                    }
                    else
                    {
                        numero = numero + 0.01;
                    }
                    break;
                case "pocaPrecision":
                    if (plus == 0)
                    {
                        numero = numero - 0.1;
                    }
                    else
                    {
                        numero = numero + 0.1;
                    }
                    break;
                case "muyPocaPrecision":
                    if (plus == 0)
                    {
                        numero = numero - 1;
                    }
                    else
                    {
                        numero = numero + 1;
                    }
                    break;
                default:
                    numero = 0;
                    break;
            }
            return numero;

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
        //metodo de control de dominio para manipulacion restfull mediante generacion de datos mock
        public moneda getInformationWebTest(string tipoMoneda, string variabilidad)
        {
            tipoMoneda = tipoMoneda.ToLower();
            string aux;
            if (ComparacionStrings(tipoMoneda, "dolar"))
            {
                dolar = getVariation(dolar, variabilidad);
                aux = dolar.ToString();
                return new moneda("0", aux, "N/A");
            }
            else
            {
                if (ComparacionStrings(tipoMoneda, "real"))
                {
                    real = getVariation(real, variabilidad);
                    aux = real.ToString();
                    return new moneda("0", aux, "N/A");
                }
                else
                {
                    pesos = getVariation(pesos, variabilidad);
                    aux = pesos.ToString();
                    return new moneda("0", aux, "N/A");
                }
            }
        }
    }
}
