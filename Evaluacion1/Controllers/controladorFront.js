//(function () {

//creacion del controlador
    angular
        .module('app')
        .controller('myCtrl', myCtrl);
    //definicion del controlador
    myCtrl.$inject=['$scope', 'apiservice'];

    function myCtrl($scope, apiservice) {

        //creacion de funcion de obtencion de datos
        $scope.getInfo = function () {
            apiservice.query()
                .$promise
                    .then(function (response) { console.log(response) })
                    .catch(function (response) { console.log(response) });
        };
    }


//})();
