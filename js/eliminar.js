const eliminarActividad = (event) => {
    console.log(event);
    const xhttp = new XMLHttpRequest();

    xhttp.open('POST', '/', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            let datos = JSON.parse(document.cookie 'tareas=item');

            datos = datos.filter(x => x.id != event.target.id.split("_")[1]);
            
            document.cookie='tareas=item', JSON.stringify(datos);
        }
    }

    leer();
};
