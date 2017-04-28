# Proyecto de Servicio API y cliente para cotización de moneda
## Objetivos
### Servicio API
1. Un servicio "cotización" que sea llamado con los parámetros de la moneda ej: http://localhost:8080/MyResftfullApp/Cotizacion/MONEDA, donde MONEDA podría ser "Dolar", "Pesos", "Real"; implementando el patrón Strategy para consumir los diferentes servicios.

2. Para los parámetros Pesos y Real, implementar un servicio que de una respuesta que sea
error 401 no authorized de http. Para el parámetro Dólar implementar un servicio que
consuma la cotización del dólar actual desde el servicio externo:
http://www.bancoprovincia.com.ar/Principal/Dolar

### Cliente
1. Se puede implementar un BackEnd que consuma la Cotización de Dólares de
http://www.bancoprovincia.com.ar/Principal/Dolar
2. La cotizaciones de las 3 monedas se deben ver en 3 columnas
claramente tituladas donde las cotizaciones se deberán ver con un estilo "Card"
(opcion: http://v4-alpha.getbootstrap.com/components/card/)
3. La cotizaciones se deberán actualizar cada 10 segundos
(número configurable en el config.js)
4. Tras cada actualización en vez de Reemplazar cada "Card" se deberá agregar una Card
nueva a la columna de manera que se vea el histórico de la misma.

5. Cada Card deberá mostrar el tiempo al estilo Twitter:
A: Hace X segundos
B: Hace Y minutos
C: hace Z horas

6.  El estado de la aplicación deberá mantenerse incluso después de un Refresh del
browser
## Funcionamiento
El repositorio contiene un proyecto en VS2013 que al entrar en debug apertura un servidor con direccion http://localhost:8080/
1. Para el uso del servicio API debera ingresar a la direccion http://localhost:8080/Cotizacion.svc que corresponde al servicio como tal
2. Un cambio de la direccion URL tal como http://localhost:8080/Cotizacion.svc/{moneda} siendo moneda la variable de moneda de interes; al aplicar http://localhost:8080/Cotizacion.svc/dolar.
3. Mediante la direccion http://localhost:8080/index.html usted puede acceder al cliente de cotizacion
4. En la carpeta del proyecto App/config.js encontrara un archivo con el parametro tiempoDeTrigger es una variable que sirve para setear el tiempo de refrescamiento en milisegundos
5. Para los datos mock se agrego al servidor la interpretacion de la direccion Uri http://localhost:8080/Cotizacion.svc/test/{moneda}/{variabilidad}; siendo moneda una variable a elegir entre dolar, real, y pesos; mientras que variabilidad estará entre en el rango de muchaPrecision, precision, pocaPrecision, y muyPocaPrecision.
6. Para el uso del cliente en modo de consumo de datos del API del banco o consumo de datos del servidor de datos mock debe acceder a al archivo App/config.js y realizar set en la variable origenDatos con valor 'server' o 'mock'.
7. Para en consumo de datos mock debe precisar la variabilidad de los datos mediante el archivo App/config.js en sus variable variabilidad

## Patron strategy
En funcion de cumplir con el requisito de trabajo que es el uso del patron strategy se planteo las siguientes consideraciones:
1. Se realizo una carpeta en el proyecto con el nombre strategy y se planteo que la estrategia incluia la accion de responder ante tres escenarios, peticion de la cotizacion del dolar,reales o pesos.
2. cada divisa cuenta con su propia clase para facilitar posterior mantenimiento, por lo que se realizo tres clases que implementaban a estrategia.
3. se realizo una clase documento la cual crea el objeto estrategia y permite implementar la estrategia deseada 

