//(function () {

//creacion del servicio
angular
    .module('app')
    .factory('apiservice', apiservice);

//definicion del servicio

apiservice.$inject = ['$http', '$resource'];

function apiservice($http, $resource) {
    var resourceUrl = './Cotizacion.svc/moneda';
    return $resource(
        resourceUrl,
        { moneda: 'dolar' },
        {
            getInfo: { method: "GET" }
        });
}

//})();
