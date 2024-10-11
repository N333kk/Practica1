const botonPrueba=document.getElementById('botonPrueba');
let textoAModificarJS=document.querySelectorAll('.jsTF');
let textoAModificar=document.getElementById('cssTF');

botonPrueba.addEventListener('click',event=>{
    textoAModificar.style = 'color: blue';
    textoAModificarJS.forEach(element => {
        element.style = 'color:yellow';
    });
    console.log('done');
})