let id_edicion = 0;

const editarActividad = (event) => {
    console.log(event);
    const xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            const datos = JSON.parse(localStorage.getItem('tareas'));
            const cambiar = datos.filter(x => x.id == event.target.id.split('_')[1])[0];
            id_edicion = cambiar.id;

            document.getElementById('nombre').value = cambiar.tarea;
            document.getElementById('descripcion').value = cambiar.descripcion;

            document.getElementById('btn').innerHTML = `
            <div class="d-flex justify-content-center">
                <input type="submit" id="editar" class="btn btn-primary me-2" style="font-size: large;" value="Guardar">
                <input type="submit" id="descartar" class="btn btn-danger ms-2" style="font-size: large;" value="Descartar">
            </div>
            `;

            document.getElementById('descartar').addEventListener('click', (event) => {
                document.getElementById('btn').innerHTML = `
                    <input type="submit" id="crear" class="btn btn-primary w-50" style="font-size: large;" value="Crear">
                `;

                document.getElementById('nombre').value = "";
                document.getElementById('descripcion').value = "";
                id_edicion = 0;
            });

            document.getElementById('editar').addEventListener('click', (event) => edicionConfirmada(event));
        }
    }
};

const edicionConfirmada = (event) => {
    let datos = JSON.parse(localStorage.getItem('tareas'));
    let indice = 0;
    
    for(let i = 0; i < datos.length; i++){
        if(datos[i].id == id_edicion){
            indice = i;
            id_edicion = 0;
            break;
        }
    }

    datos[indice].tarea = document.getElementById('nombre').value;
    datos[indice].descripcion = document.getElementById('descripcion').value;

    document.getElementById('btn').innerHTML = `
        <input type="submit" id="crear" class="btn btn-primary w-50" style="font-size: large;" value="Crear">
    `;

    document.getElementById('nombre').value = "";
    document.getElementById('descripcion').value = "";
    id_edicion = 0;

    localStorage.setItem('tareas', JSON.stringify(datos));

    leer();
};
