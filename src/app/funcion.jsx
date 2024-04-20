const charNumero={
    llaveEnt:"{",
    llaveSal:"}",
    corchEnt:"[",
    corchSal:"]",
    coma:",",
    doblePt:":",
    colon:"'",
    null:"n",
    true:"t",
    false:"f"
};
//validacion y asignacion de tokens al archivo JSON cargado
async function validacionYasignacion(file){
    const reader = new FileReader();
    const tokens = await validacionJSONtokens(reader);

    //convierte los tokens a una cadena JSON
    const tokensJSON = JSON.stringify(tokens, null, 2);
    //muestra los tokens 
    const tokensOutput = document.getElementById('tokens-output');
    tokensOutput.textContent = tokensJSON;
}
//apartado para subir el archivo JSON
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', async(event) => {
    if(event.target.files.length > 0){
        const file = event.target.files[0];
        await validacionYasignacion(file);
    }
});

//inicializar las variables
async function validacionJSONtokens(reader){
    let currentChar = await reader.read();
    let currentTokenType = null;
    let buffer = "";
    let tokens = [];

    //bucle para leer caracteres y generar tokens
    while (currentChar !== null){
        while(/\s/.test(this.currentChar)){
            this.currentChar = await reader.read();
        }
        //determina el tipo de token
        switch(this.currentChar){
            case "{":
                this.currentTokenType = TokenType.llaveEnt;
                break;
            case "}":
                this.currentTokenType = TokenType.llaveSal;
                break;
            case "[":
                this.currentTokenType = TokenType.corchEnt;
                break;
            case "]":
                this.currentTokenType = TokenType.corchSal;
                break;
            case ",":
                this.currentTokenType = TokenType.coma;
                break;
            case ":":
                this.currentTokenType = TokenType.doblePt;
                break;
            case '"':
                await readString(reader, buffer, tokens);
                break;
            case "n":
                await readNull(reader, buffer, tokens);
                break;
            case "t":
                await readTrue(reader, buffer, tokens);
                break;
            case "f":
                await readFalse(reader, buffer, tokens);
                break;
                default:
                    if(/\d/.test(currentChar)){
                        await readNumber(reader, buffer, tokens);
                    }else{
                        await readCharacter(reader, buffer, tokens);
                    }
            }

            //crea un nuevo token y lo agrega a la lista de tokens
            tokens.push({type: currentTokenType, value: buffer});
            buffer = "";
            //lee el siguiente caracter
            currentChar = await reader.read();
     }
     //validar la estructura JSON
     validacionJSONtokens(tokens);
     //devuelve la lista de tokens
     return tokens;
} 
async function readString(reader, buffer, tokens){
    currentTokenType = TokenType.String;
    currentChar = await reader.read();

    while(currentChar !== '"' && currentChar !== null){
        if(currentChar === "\\"){
            buffer += currentChar;
            currentChar = await reader.read();
            if(currentChar === null){
                throw new analisisJson ("Este caracter no concuerda")
            }
        }
        buffer += currentChar;
        currentChar = await reader.read();
    }
    if(currentChar === null){
        throw new analisisJson("Este caracter no concuerda")
    }
    tokens.push({type: currentTokenType, value: buffer});
    buffer = "";
    currentChar = await reader.read();
}
async function readNull(reader, buffer, tokens){
    currentTokenType = TokenType.null;
    currentChar = await reader.read();
    if(currentChar !== "n" || await reader.read() !== "u" || await reader.read() !== "l" || await reader.read() !== "l" ){
        throw new analisisJson("null no válido.");
    }
    tokens.push({type: currentTokenType, value: buffer});
    buffer = "";
    currentChar = await reader.read();
}
async function readTrue(reader, buffer, tokens){
    currentTokenType = TokenType.true;
    currentChar = await reader.read();
    if(currentChar !== "t" || await reader.read() !== "r" || await reader.read() !== "u" || await reader.read() !== "e" ){
        throw new analisisJson("true no válido.");
    }
    tokens.push({type: currentTokenType, value: buffer});
    buffer = "";
    currentChar = await reader.read();
}
async function readFalse(reader, buffer, tokens){
    currentTokenType = TokenType.false;
    currentChar = await reader.read();
    if(currentChar !== "f" || await reader.read() !== "a" || await reader.read() !== "l" || await reader.read() !== "s" || await reader.read() !== "e" ){
        throw new analisisJson("false no válido.");
    }
    tokens.push({type: currentTokenType, value: buffer});
    buffer = "";
    currentChar = await reader.read(); 
}