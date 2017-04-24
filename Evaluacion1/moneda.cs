using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace Evaluacion1
{
    //Clase para almacenar los valores consumidos desde la web https://www.bancoprovincia.com.ar/Principal/Dolar
    [DataContract]
    public class moneda
    {
        [DataMember]
        public string PrecioCompra { get; set; }
        [DataMember]
        public string PrecioVenta { get; set; }
        [DataMember]
        public string Actualizacion { get; set; }

    //constructor mediante patron factory
        public moneda(string precioCompra, string precioVenta, string actualizacion)
        {
            this.PrecioCompra = precioCompra;
            this.PrecioVenta = precioVenta;
            this.Actualizacion = actualizacion;
        }
    }
}