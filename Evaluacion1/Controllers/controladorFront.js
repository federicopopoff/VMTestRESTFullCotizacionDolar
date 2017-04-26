//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', 'tiempo']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice, tiempo) {
    $scope.localStorage = localStorage.DataStorage;

    if (localStorage.DataStorage != undefined) {
        $scope.Dolar = JSON.parse( localStorage.DataStorage);
    } else {
        apiservice.setInfoLocalFromWeb('dolar').then($scope.Dolar = JSON.parse(localStorage.DataStorage));
        
    }

    $scope.setInfoLocalFromWeb = function () {
        apiservice.setInfoLocalFromWeb('dolar');
    }

    $scope.servicioTiempoAnterior = function (ref) {
        return tiempo.getTimeAgo(ref);
    }

 }