//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', 'tiempo','$interval','mockServices']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice, tiempo, $interval, mockServices) {
    //disparador timer para ejecucion de requests
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
            $scope.DataBase = JSON.parse(localStorage.DataStorage);
        } else {
            console.log("error en obtencion de datos");
        }
        testSetInfoLocalFromWeb = true;
    };
    //funcion de comunicacion y solicitud de datos mock
    $scope.setInfoLocalFromTest = function (ref, variabilidad) {
        mockServices.setInfoLocalFromWeb(ref, variabilidad);
        testSetInfoLocalFromTest = true;
        if (localStorage.DataStorage != undefined) {
            $scope.DataBase = JSON.parse(localStorage.DataStorage);
        } else {
            console.log("error en obtencion de datos");
        }
    };
    //precision de tiempo tipo twitter
    $scope.servicioTiempoAnterior = function (ref) {
        testServicioTiempoAnterior = true;
        return tiempo.getTimeAgo(ref);
    };

    $scope.ControllerTestAux = 'test';

 }