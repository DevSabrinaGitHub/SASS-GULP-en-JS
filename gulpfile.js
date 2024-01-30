//ejecutar Gulp
function tarea(done){ //done es un callback, se agrego para evitar msj de error al compilar
    console.log("mi primer tarea");
    done();
}


exports.primerTarea= tarea;

/*puedo poner tambien 
exports.tarea= tarea; 
tarea de la parte izquierda es para ejecutar luego en terminal, tarea de parte derecha es la funcion
ejecutar en terminal: npx gulp tarea  */


//con const es una funcion y abrimos los archivos src, y dest
//src sirve para identificar un archivo
//dest sirve para guardarlo
//requiere gulp, busca el archivo gulp en node_modules y aplica al archivo gulpfile
const{src, dest}= require("gulp");
//ejecutar hojas estilo con sass
function css(done){

    src('src/scss/app.scss').pipe() //identificar archivo sass. compilarlo con .pipe()






    done(); //callback que avisa a gulp cuando llegamos al final
}