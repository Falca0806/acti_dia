document.getElementById('crear').addEventListener("click", (event) => {
    event.preventDefault();
    crearActividad(event);
});

const crearActividad = (event) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open('POST', '', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            let datos = JSON.parse(localStorage.getItem('tareas'));
            let highestId = 0;

            for(let i = 0; i < datos.length; i++){
                highestId = datos[i].id > highestId ? datos[i].id : highestId;
            }

            console.log(highestId);
            const fecha = new Date();
            let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            diaSemana[fecha.getDay()];


            let mesYear = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            mesYear[fecha.getMonth()];

            datos.push({'id': highestId + 1, 'tarea': document.getElementById('nombre').value,
                'descripcion': document.getElementById('descripcion').value,
                'hora_creado': `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesYear[fecha.getMonth()]} de ${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`});
            
            localStorage.setItem('tareas', JSON.stringify(datos));

            document.getElementById('nombre').value = "";
            document.getElementById('descripcion').value = "";
        }
    }

    leer();
};
