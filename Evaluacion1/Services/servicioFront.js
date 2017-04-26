//creacion de servicio
angular
    .module('app')
    .factory('apiservice', apiservice);

//inyeccion
apiservice.$inject = ['$http'];

function apiservice($http) {
    return {
        setInfoLocalFromWeb: function (aux) {
            $http.get("./Cotizacion.svc/"+aux)
            .then(function (response) {
                //preparacion de stampa de tiempo
                var tiempo = new Date();
                var stamp = tiempo.getTime();
                //obtencion de data
                var data = $.xml2json(response.data);
                data = '{"actualizacion":"' + data.moneda.Actualizacion + '","PrecioCompra":"' + data.moneda.PrecioCompra + '","PrecioVenta":"' + data.moneda.PrecioVenta + '","stamp":"'+stamp+'"}';

                //comprobacion de objeto en localstorage
                //----condicion de existencia de registro
                //localStorage.length
                if (localStorage.DataStorage != undefined) {
                    indexString = localStorage.DataStorage.length - 1;
                    subString = localStorage.DataStorage.substring(1, indexString);
                    data = subString +","+ data;
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
                


    
    
