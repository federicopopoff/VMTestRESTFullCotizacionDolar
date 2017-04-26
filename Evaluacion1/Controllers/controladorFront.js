//creacion de controlador
angular
    .module('app')
    .controller('myCtrl', myCtrl);

//inyeccion
myCtrl.$inject = ['$scope', 'apiservice']

//declaracion de metodos y propiedades

function myCtrl($scope, apiservice) {
    $scope.localStorage = localStorage.DataStorage;

    if (localStorage.DataStorage != undefined) {
        $scope.Dolar = JSON.parse( localStorage.DataStorage);
    } else {
        apiservice.setInfoLocalFromWeb('dolar').then($scope.Dolar = JSON.parse(localStorage.DataStorage));
        
    }

    $scope.setInfoLocalFromWeb = function () {
        apiservice.setInfoLocalFromWeb('dolar');
    }




    $scope.haceCuantoTiempo = function (ref) {
        //obtencion de datos
        var referencia = ref;
        var tiempo = new Date();
        //parse de tiempo
        var haceSegundos = Math.round((tiempo.getTime() - referencia) / 1000);
        var haceMinutos = Math.round((tiempo.getTime() - referencia) / 60000);
        var haceHoras = Math.round((tiempo.getTime() - referencia) / 1440000);
        //estructura de control
        if (haceSegundos < 60)
        {
            console.log(haceSegundos);
            return haceSegundos + ' segundos';
        }
        else
        {
            if (haceMinutos < 60)
            {
                console.log(haceMinutos);
                return haceMinutos + ' minutos';
            }
            else
            {
                console.log(haceHoras);
                return haceHoras + ' horas';
            }
        }
        
    }
    
 }