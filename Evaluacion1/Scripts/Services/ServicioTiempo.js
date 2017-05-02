angular
    .module('app')
    .factory('tiempo', tiempo);

function tiempo() {
    return {
        getTimeAgo: function (ref) {
            //obtencion de datos
            var referencia = ref;
            var tiempo = new Date();
            //parse de tiempo
            var haceSegundos = Math.round((tiempo.getTime() - referencia) / 1000);
            var haceMinutos = Math.round((tiempo.getTime() - referencia) / 60000);
            var haceHoras = Math.round((tiempo.getTime() - referencia) / 1440000);
            //estructura de control
            if (haceSegundos < 60) {
                //console.log(haceSegundos);
                return haceSegundos + ' segundos';
            }
            else {
                if (haceMinutos < 60) {
                    //console.log(haceMinutos);
                    return haceMinutos + ' minutos';
                }
                else {
                    //console.log(haceHoras);
                    return haceHoras + ' horas';
                }
            }

        }
    }
}