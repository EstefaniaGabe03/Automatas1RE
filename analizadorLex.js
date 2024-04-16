'use client'
import React, { useState } from 'react';

//define la funcion que toma el contenido del archivo
//y crea un enlace de descarga
function downloadFile(content, filename) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

const AnalizadorLex = () => {
  //se declaran las variables de los estados y una funcion Set para
  //actualizar su valor
  const [error, setError] = useState(null); 
  const [operador, setOperador] = useState('');
  const [texto, setTexto] = useState('');
  const [cOL, setOL] = useState(0);
  const [cOR, setOR] = useState(0);
  const [cOA, setOA] = useState(0);
  const [cOM, setOM] = useState(0);
  const [cSC, setSC] = useState(0);
  const [cPR, setPR] = useState(0);
  const [cN, setN] = useState(0);
  const [cID, setID] = useState(0);
  const [cont, setCont] = useState(0);
  const [resultadoVisible, setResultadoVisible] = useState(false);

//----------------------------DICCIONARIO--------------------------------------
  
  //arrays que contienen los operadores y pabras reservadas

  //identifica el operador logico
  const opLogico = ["|", "|", "&", "&", "!"];
  //identifica el operador relacional
  const opRelacional = [">", "<", "="];
  //identifica el operador de agrupacion
  const opAgrup = ["(", ")", "{", "}", "[", "]"];
  //identifica el operador matematico
  const opMat = ["+", "-", "*", "/", "%"];
  //identifica el operador semi (punto y coma)
  const opSemi = [";",":",",","."];
  //diccionario de palabras reservadas del lenguaje C
  const reservadas = [
    "auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else", "enum",
    "extern","float","for","goto","if","int","long","register","return","short","signed","sizeof",
    "static","struct","switch","typedef","union","unsigned","void","volatile","while","main",
    "include","printf","scanf","fprintf","fscanf","sprintf","fseek","fopen", "fclose","getch"
  ];
  //identifica los numeros
  const numeros = ["0","1","2","3","4","5","6","7","8","9"];

//se define la funcion que toma el contenido como argumento y realiza
//el analisis lexico del mismo
  const procesarContenido = (content) => {
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/\/\/.*$/gm, '');
    const words = content.match(/(\.|,|\;|\:|=|(\{|\}|\[|\]|\(|\))|(\+|-|\*|\/|%)|(!|>|<|&|\|)|("[a-zA-Z ,!]+")|[a-zA-Z_]+([0-9]+)?|[0-9]+)/g);
//-----------------SECCION PARA OBTENER LOS TOKENS-----------------------------
  
  //esta seccion es para que cada op, obtenga su token
    let newContent = [];
    let logico = [];
    let relacional = [];
    let agrupacion = [];
    let matematico = [];
    let semicolon = [];
    let pReservadas = [];
    let num = [];
    let id = [];
    for (const word of words) {
      if (word === '') {
        continue;
      }

      if (opLogico.includes(word)) {
        newContent.push(`${word} - OL`);
        logico.push(`${word}`);
      } else if (opRelacional.includes(word)) {
        newContent.push(`${word} - OR`);
        relacional.push(`${word}`);
      } else if (opAgrup.includes(word)) {
        newContent.push(`${word} - OA`);
        agrupacion.push(`${word}`);
      } else if (opMat.includes(word)) {
        newContent.push(`${word} - OM`);
        matematico.push(`${word}`);
      } else if (opSemi.includes(word)) {
        newContent.push(`${word} - SC`);
        semicolon.push(`${word}`);
      } else if (reservadas.includes(word)) {
        newContent.push(`${word} - PR`);
        pReservadas.push(`${word}`);
      } else if (/^\d+$/.test(word) ) {
        newContent.push(`${word} - NUM`);
        num.push(`${word}`);
      } else {
        newContent.push(`${word} - ID`);
        id.push(`${word}`);
      }
    }
//convierte el nuevo contenido en una cadena y actualiza el estado
    newContent = newContent.join('\n');
    setOperador(newContent);
    setCont(newContent.split('\n').length); // Actualiza el contador 

    //actualizan cada contador de cada categoria
    setOL(cOL + logico.length);
    setOR(cOR + relacional.length);
    setOA(cOA + agrupacion.length);
    setOM(cOM + matematico.length);
    setSC(cSC + semicolon.length);
    setPR(cPR + pReservadas.length);
    setN(cN + num.length);
    setID(cID + id.length);
    setResultadoVisible(true);

//descarga el archivo despues de actualizar el estado
    downloadFile(newContent, 'nuevo_archivo.txt'); // Descarga el archivo después de actualizar el estado
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let content = e.target.result;
        procesarContenido(content);
      };
      reader.onerror = (e) => {
        setError('Error al leer el archivo.');
      };
      reader.readAsText(file);
    }
  };

  const handleTextArea = (e) => {
    setTexto(e.target.value);
  };
//maneja el boton Analizar y llama a procesar el contenido con el texto ingresado
  const handleAnalizarClick = () => {
    procesarContenido(texto); 
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Analizar Texto</h3>
      <textarea
        value={texto}
        onChange={handleTextArea}
        placeholder="Escribe el texto"
        style={{ width: '100%', minHeight: '200px', marginBottom: '15px' }}
      />
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        style={{
          background: 'plum',
          color: 'black',
          padding: '10px 10px',
          cursor: 'pointer',
          marginBottom: '15px',
          display: 'block',
        }}
      >
        Seleccionar Archivo
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleAnalizarClick} 
        style={{ margin: '10px',
        padding: '8px 16px', 
        fontSize: '16px' }}
        >Analizar</button>
      </div>
      {resultadoVisible && (
        <div>
          <strong>Resultado:</strong>
          <pre>{operador}</pre>
          <div>
          <strong> Total:</strong>{cont}
          </div>
          <div>
          <strong> Operadores Lógicos:</strong>{cOL}
          </div>
          <div>
          <strong> Operadores Relacionales:</strong>{cOR}
          </div>
          <div>
          <strong> Operadores de Agrupación:</strong>{cOA}
          </div>
          <div>
          <strong> Operadores Matemáticos:</strong>{cOM}
          </div>
          <div>
          <strong> Semicolon:</strong>{cSC}
          </div>
          <div>
          <strong> Palabras Reservadas:</strong>{cPR}
          </div>
          <div>
          <strong> Números:</strong>{cN}
          </div>
          <div>
          <strong> ID's:</strong>{cID}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalizadorLex;
