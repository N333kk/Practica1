const botonPrueba=document.getElementById('botonPrueba');
let textoAModificar= document.getElementById('textoModificar');

botonPrueba.addEventListener('click',event=>{
    textoAModificar.innerHTML="Nuestro boton se encarga de modificar este texto al hacer click en el!";
})