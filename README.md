# yeison.pruebas-gmail.com
calculadoraBit

La calculculadora esta completamente funcional:
1. al digitar los numeros y operaciones son almacenadas en el "inputHistorico" superior 
2. al pulsar "=" se calcula la operacion definida en "inputHistorico" con las regla aritmeticas de jerarquia primero 
    multiplicaciones y divisiones y posterior sumas y restas
3. si ya se ha obtenido un resultado con la tecla "=" y se pulsa un nuevo digito, la calculadora etiende que el resulado anterior sera desechado y no se tendra en cuenta para la operacion actual.
4. si ya se ha obtenido un resultado con la tecla "=" y se pulsa una nueva operacion, la calculadora etiende que el resulado anterior sera el primero en la siguiente operacion 

Desde mi puto de vista faltaria implementar:
1. Poner el punto decimal
2. poder borrar digito a digito lo insertado en el "inputHistorico"
3. poder borra toda la operacion, y dejar el resultado en 0
4. Detectar la sintaxis de error (incluyendo division por 0)

Al pensar en estos ultimos items faltantes, creo que deberia cambiar la estructura de lectura de digitos y operaciones a un unico string y al pulsar operar formar los digitos en tipo flotante y usar la misma funcion de operacion.

ese es el proximo reto...



