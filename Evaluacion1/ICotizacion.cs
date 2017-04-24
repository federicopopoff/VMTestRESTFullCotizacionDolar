using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace Evaluacion1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICotizacion" in both code and config file together.
    //creacion de servicio mediante patron strategy se define una interface principal, y los hijos heredan la interface con un solo metodo declarado
    [ServiceContract]
    public interface ICotizacion
    {
        //Cotizacion moneda
        [OperationContract]
        [WebInvoke(Method="GET",UriTemplate="/{tipoMoneda}",BodyStyle=WebMessageBodyStyle.Bare,ResponseFormat=WebMessageFormat.Xml)]
        moneda getInformationWeb(string tipoMoneda);

    }
}
