let nombre, correo, mensaje;
let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    leerdatos()
})

function leerdatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    validardata(nombre, correo, mensaje)
    GuardarLocalStorage(nombre,correo,mensaje)
    }

function validardata(nombre, correo, mensaje) {
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
}

function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
    }

    function listardata(){
        let nombreUsu = localStorage.getItem('Nombre')
        let correoUsu = localStorage.getItem('Correo')
        let mensajeUsu = localStorage.getItem('Correo')
    }

    function GuardarLocalStorage(nombre,correo,mensaje) {
        localStorage.setItem('Nombre',nombre)
        localStorage.setItem('Correo',correo)
        localStorage.setItem('Mensaje',mensaje)
        listardata()
    }


