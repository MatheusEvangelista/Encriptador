const input = document.querySelector("#lolo");
const resultado = document.querySelector("#resultado");

function losencriptar() {
const inputEncriptado = encriptar(input.value)
resultado.value = inputEncriptado

 document.getElementById("resultado").style.backgroundImage = "none"

 document.getElementById("resultado").style.backgroundImage = "none"
}
 
function encriptar(stringencriptada) {
     const matrizcodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
     stringencriptada = stringencriptada.toLowerCase()
     for(let i=1; i < matrizcodigo.length; i++) {
         if(stringencriptada.includes(matrizcodigo[i][0])){
         stringencriptada = stringencriptada.replace(matrizcodigo[i][0], matrizcodigo[i][1])           
         }
        } 
     return stringencriptada;
}    

    const it = document.querySelector('#lolo');
    const re = document.querySelector('#resultado');
    

    function Desencriptar() {
        const inputEncriptado = desencriptar(it.value)
        resultado.value = inputEncriptado
        
}
    
    
    function desencriptar(stringencriptada) {
         const matrizcodigo = [["ufat","u"],["ober","o"],["imes","i"],["enter","e"],["ai","a"]];
         stringencriptada = stringencriptada.toLowerCase();

         for(let i=0; i < matrizcodigo.length; i++) {
             if(stringencriptada.includes(matrizcodigo[i][1])){
             stringencriptada = stringencriptada.replace(matrizcodigo[i][0], matrizcodigo[i][1]);
              
             }
            } 
         return stringencriptada;
         
} 
            
    addEventListener('click',copiar);
    function copiar(){

      navigator.clipboard.writeText(resultado.value)
      window.alert = "Você Copiou"
}

    
    
