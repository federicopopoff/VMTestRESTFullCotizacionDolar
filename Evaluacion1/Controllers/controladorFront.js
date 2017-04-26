﻿//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice', 'tiempo','prueba','$interval']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice, tiempo,prueba,$interval) {
    //disparador timer para ejecucion de requests
    var request = function () {
        $scope.setInfoLocalFromWeb('dolar');
        $scope.setInfoLocalFromWeb('pesos');
        $scope.setInfoLocalFromWeb('real')
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

    //presicion de tiempo tipo twitter
    $scope.servicioTiempoAnterior = function (ref) {
        return tiempo.getTimeAgo(ref);
    }

 }