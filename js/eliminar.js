const eliminarActividad = (event) => {
    console.log(event);
    const xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            let datos = JSON.parse(sessionStorage.getItem('tareas'));

            datos = datos.filter(x => x.id != event.target.id.split("_")[1]);
            
            sessionStorage.setItem('tareas', JSON.stringify(datos));
        }
    }

    leer();
};