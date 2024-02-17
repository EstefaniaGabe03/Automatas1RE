const fS  = require('fS');

const listaTokens = {
    '{':10,
    '}':11,
    '[':12,
    ']':13,
    ':':14,
    '"':15,
    ' ':16,
    '\n':17,
    '\r':18,
};
//procesa un archivo JSON y da la salida
function procesarArchivo(archivo){
    //lee el archivo
    const contenido = fS.readFileSync(archivo,'utf8');

    //iterar sobre cada caracter
    for (let i = 0; i < contenido.length; i++){
        const caracter = contenido[i];
        //verifica si el caracter esta en la lista de Tokens
        if (caracter in listaTokens){
            console.log(`${listaTokens[caracter]}:=${caracter}`);
        }else{
            console.log(`Caracter inexistente: ${caracter}`);
        }
    }
}

const archivoJson = 'archivo.jason';//nombre del archivo JSON
procesarArchivo(archivoJson);