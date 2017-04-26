//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', 'tiempo','prueba']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice, tiempo,prueba) {

    $scope.setInfoLocalFromWeb = function (ref) {
        apiservice.setInfoLocalFromWeb(ref);
        if (localStorage.DataStorage != undefined) {
            $scope.DataBase = JSON.parse( localStorage.DataStorage);
        } else {
            console.log("error en obtencion de datos");
        }
    }

    $scope.servicioTiempoAnterior = function (ref) {
        return tiempo.getTimeAgo(ref);
    }

 }