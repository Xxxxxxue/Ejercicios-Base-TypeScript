Basic profile
----------------
Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

Ingresar entre 1 o 3 palabras seguidas como parametro en consola, separando de un espacio, ejemplo:
node index.js jhon doe jhonny

al ejecutar debe mostrar:

{

"name": "jhon",

"second-name": "doe",

"nickname": "jhonny"

}

Objetivos
------------------
Uso de tipos de dato básicos, Usamos el tipo de dato string y una sintaxis de declaración Object
Obtener parametros en consola, Obtener el parámetro que pasamos por consola para que el programa compilado lo lea.
instalando algo nuevo.. typings, Conocemos cómo se instala el paquete typings que nos facilita a que typescript defina de que tipo es el objeto process y qué contiene
Uso de TypeScript en consola, transpilar vía comando.

Qué se necesita
----------------------
Tener la última versión de nodejs instalado
Tener instalado globalmente el paquete de TypeScript
Tener instalado globalemente el paquete typings

Cómo transpilarlo-
----------------
npm install -g typescript typings

cd 11_basic-profile

tsc --init

Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad noImplicitAny a true
tsc

Al ejecutar este último comando probablemente muestre un error ya que typescript al leer el code muestre "process" no existe o no está definido, entonces realizamos lo siguiente:
typings install env~node --global --save

Este comando al ejecutarlo guardará la definición del objeto "process" para que al correr el comando tc lo comprenda, aparecerá una carpeta typings creada en la carpeta del ejercicio, esa carpeta contiene la definición del objeto process de node, ejecutamos de nuevo:
tsc

Si no muestra error es porque todo está bien, en caso contrario favor de crear un issue en este repo.

Otra observación a este punto es que se creará un archivo llamado typings.json.

Bajo GIT podemos actualizar el archivo .gitignore y agregar typings indicando que dicha carpeta no sea agregada en tu repo, como ya tenemos ese archivo llamado typings.json, nos dirigimos a la carpeta del ejercicio y se aplica este comando.

typings install

Cómo visualizarlo?
-------------------------
Una vez que la transpilacion sea satisfactoria, abrir una consola o terminal y ejecutar el siguiente comando:
node index.js jhon doe jhonny