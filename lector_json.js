//Estefania Garcia Beltrán
//Práctica 1. 
//Crear un programa que lea un archivo JSON e imprima los caracteres
//por separado

const fS = require('fS');

function impCarac(jsonFile){
    //lee el archivo JSON
    const dato = fS.readFileSync(jsonFile,'utf8');//lee el contenido del archivo
    const datoJson = JSON.parse(dato);

    //itera cada clave/valor en el objeto JSON
    for(let key in datoJson){
        //"hasOwnProperty" se asegura de que solo se iteren sobre las
        //propiedades directas del objeto. NUEVO METODO PARA MI
        if (datoJson.hasOwnProperty(key)){
            console.log("{");
            //imprime los caracteres de la clave
            for(let i = 0; i < key.length; i++){
                console.log(key[i]);
            }
            console.log(" ");
            console.log(":");
            console.log('"');
            //imprime caracteres del valor
            for (let i = 0; i < datoJson[key].length; i++){
                console.log(datoJson[key][i]);
            }
            console.log('"');
            console.log("}");
        }

    }
}

const jsonFile = 'prueba.json'//nombre del archo .json
impCarac(jsonFile);