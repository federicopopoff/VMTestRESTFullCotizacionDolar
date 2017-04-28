using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Evaluacion1
{
    public class toolBox
    {
        // cambio USD to ARS
        public double dolar = 15.7;
        // cambio ARS to BRL
        public double real = 0.205;
        // cambio ARS to USD
        public double pesos = 0.064;

        // obtener data desde un servicio externo
        public moneda getData(string sUrlRequest)
        {
            var dataBanca = new WebClient().DownloadString(sUrlRequest);
            string[] data = dataBanca.Split('"');
            moneda Divisa = new moneda(Convert.ToString(data[1]), Convert.ToString(data[3]), Convert.ToString(data[5]));
            return Divisa;
        }
        // comparacion de una cadena de texto
        public bool ComparacionStrings(string moneda, string divisa)
        {
            return divisa.Equals(moneda, StringComparison.OrdinalIgnoreCase);
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
    }
}