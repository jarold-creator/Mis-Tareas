const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {
        // agregar tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerHTML = input.value;
        tareaNueva.appendChild(texto);

        // crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        // Agregar tarea a la lista
        listaDeTarea.appendChild(tareaNueva);
        // limpiar la caja de texto input y posiciona el cursor
        input.value = '';
        input.focus();
        input.setSelectionRange(0, 0);
    } else {
        // alert('Por favor ingresa una tarea');

        // const sweetAlert = require("sweetalert2");
        // // Create a new alert
        // sweetAlert({
        //     title: "Hola ... !",
        //     text: "Debes ingresar una tarea",
        //     icon: "success",
        // });

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar una tarea ...!',
            // footer: '<a href="">Why do I have this issue?</a>'
            width: 400,
            height: 200            
        })
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);