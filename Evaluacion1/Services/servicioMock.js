//creacion de servicio
angular
    .module('app')
    .factory('mockServices', mockServices);

//inyeccion
mockServices.$inject = ['$http'];

function mockServices($http) {
    return {
        setInfoLocalFromWeb: function (aux, variabilidad) {
            $http.get("./Cotizacion.svc/test/" + aux + '/' + variabilidad)
            .then(function (response) {
                //preparacion de stampa de tiempo
                var tiempo = new Date();
                var stamp = tiempo.getTime();
                //obtencion de data
                var data = $.xml2json(response.data);
                data = '{"actualizacion":"' + data.moneda.Actualizacion + '","PrecioCompra":"' + data.moneda.PrecioCompra + '","PrecioVenta":"' + data.moneda.PrecioVenta + '","stamp":"' + stamp + '","moneda":"' + aux + '"}';

                //----condicion de existencia de registro
                //localStorage.length
                if (localStorage.DataStorage != undefined) {
                    indexString = localStorage.DataStorage.length - 1;
                    subString = localStorage.DataStorage.substring(1, indexString);
                    data = subString + "," + data;
                    data = '[' + data + ']';
                    localStorage.setItem('DataStorage', data);
                    console.log(localStorage.DataStorage);
                }
                    //---condicion de inexistencia de registro
                else {
                    data = '[' + data + ']';
                    localStorage.setItem('DataStorage', data);
                    console.log(localStorage.DataStorage);
                }
            });
        }
    }
}
                


    
    
