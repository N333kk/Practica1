const botonPrueba=document.getElementById('botonPrueba');
let textoAModificar= document.getElementById('textoModificar');

botonPrueba.addEventListener('click',event=>{
    textoAModificar.innerHTML="Hola JavaScript!";
})