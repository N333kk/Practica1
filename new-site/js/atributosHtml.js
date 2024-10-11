const botonId = document.getElementById('botonId');
const botonContenido = document.getElementById('botonContenido');
let textoAModificar = document.getElementById('textoModificar');

botonId.addEventListener('click',event=>{
    textoAModificar.id='idModificado';
})
botonContenido.addEventListener('click',event=>{
    if(textoAModificar.id=='idModificado'){
        textoAModificar.textContent="El primer boton cambia el atributo id y despues el segundo si el id esta cambiado modifica el texto!"
    }
})