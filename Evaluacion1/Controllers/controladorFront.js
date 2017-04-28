//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', 'tiempo','$interval','mockServices']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice, tiempo, $interval, mockServices) {
    //disparador timer para ejecucion de requests
    $scope.consumo == 'mock'

    var request = function () {
        if (origenDatos == 'server') {
            $scope.setInfoLocalFromWeb('dolar');
            $scope.setInfoLocalFromWeb('pesos');
            $scope.setInfoLocalFromWeb('real')
        }
        else if (origenDatos == 'mock') {
            $scope.setInfoLocalFromTest('dolar', variabilidad);
            $scope.setInfoLocalFromTest('pesos', variabilidad);
            $scope.setInfoLocalFromTest('real', variabilidad);
        }
    };
    $scope.timer = $interval(request, tiempoDeTrigger);


    //funcion de comunicacion y solicitud de datos a la api
    $scope.setInfoLocalFromWeb = function (ref) {
        apiservice.setInfoLocalFromWeb(ref);
        if (localStorage.DataStorage != undefined) {
            $scope.DataBase = JSON.parse( localStorage.DataStorage);
        } else {
            console.log("error en obtencion de datos");
        }
    }
    //funcion de comunicacion y solicitud de datos mock
    $scope.setInfoLocalFromTest = function (ref, variabilidad) {
        mockServices.setInfoLocalFromWeb(ref, variabilidad);
        if (localStorage.DataStorage != undefined) {
            $scope.DataBase = JSON.parse(localStorage.DataStorage);
        } else {
            console.log("error en obtencion de datos");
        }
    }
    //precision de tiempo tipo twitter
    $scope.servicioTiempoAnterior = function (ref) {
        return tiempo.getTimeAgo(ref);
    }

    $scope.sum = function () {
        $scope.z = $scope.x + $scope.y;
    }

 }