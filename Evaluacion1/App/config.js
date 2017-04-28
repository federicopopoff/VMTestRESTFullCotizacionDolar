//*******************************************************//
//Tiempo de ejecuion de timer en milisegundos
var tiempoDeTrigger = 10000;
//*******************************************************//
//Tipo de precision en la variabilidad de los datos mock
//opciones:{   'muchaPrecision':+/- 0.001, 
//                  'precision':+/- 0.01,
//                  'pocaPrecision': +/- 0,1,
//                  'muyPocaPrecision': +/- 1}
var variabilidad = 'muyPocaPrecision';
//*******************************************************//
//Tipo de origen de datos
//opciones:{   'server':origen de datos de API de consumo
//                  'mock': origen servidor de prueba
var origenDatos = 'server';