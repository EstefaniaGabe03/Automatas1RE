# Asignación de Tokens

## Flujo del código

# Funcionalidad
1. Importación e inicializacion de las variables
2. Manejo de la entrada de archivos
3. Funcion de _*validacionYasignacion*_ toma el archivo como entrada, despúes crea un objeto FileReader, que permite leer el contenido del archivo.
4. Funcion _*validacionJSONtokens*_ lee el contenido del archivo carácter por carácter, realiza un seguimiento del carácter actual y un búfer para acumular caracteres para la creación de tokens; itera el contenido del archivo, realizando las siguientes acciones para cada caracter:
- Omite los caracteres de espacio en blanco.
- Identifica el tipo de token en función del carácter (llaves, corchetes, coma, dos puntos, comillas para cadenas, etc.).
- Para las cadenas, lee caracteres hasta encontrar la comilla de cierre, manejando las secuencias de escape (\) adecuadamente.
- Para palabras clave como null, true y false, verifica la secuencia de caracteres para asegurarse de que sean válidas.

En esencia, el código toma un archivo JSON como entrada, lo lee carácter por carácter, identifica los diferentes elementos JSON (tokens) y construye una lista de tokens que representan la estructura de los datos JSON.  

## Alcance del código
### Funciones específicas
* **Lectura de archivos JSON:** El código puede leer archivos JSON desde el sistema de archivos local del usuario.
* **Tokenización:** Analiza el contenido del archivo JSON y lo divide en tokens individuales, identificando elementos como llaves, corchetes, comas, dos puntos, cadenas, valores numéricos, palabras clave null, true y false.
* **Validación básica:** Realiza una validación básica de la sintaxis JSON, como verificar si las llaves están equilibradas y si las palabras clave null, true y false se escriben correctamente.
* **Salida (asumida):** Pudo haber mostrado la presentacion tokenizada del archivo JSON en la interfaz de usuario, lo que hubiera facilitado la comprension de la estructura del archivo.

### *Proyección del código*
El código podría ampliarse para aumentar su funcionalidad y alcance:
- **Validacion semántica:**
Validar la semántica de los datos JSON, como el formato de fechas, el rango de valores númericos y las relaciones entre objetos.
- **Visualización mejorada:**
Desarrollar una interfaz de usuario más interactiva para mostrar los resultados de analisis, incluyendo resaltado de sintaxis, etc.

#### Compromiso
Para el siguiente semestre me compromento a tener el codigo y función completo, junto con la interfaz de usuario funcionando...
