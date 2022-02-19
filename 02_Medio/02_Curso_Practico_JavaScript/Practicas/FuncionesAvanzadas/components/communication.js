window.diasinhabiles = {};

/*
 * Importamos controladores 
 */
const { isVisible, asignarDatos, eventoBloqueoListPersona, mostrarDetalleEventoPersona } = require('../controllers/actividadController');

/*
 * Comunicación bilateral
 */
window.onmessage = function (event) {
    console.log(event.data.tipo_mensaje);
    //Editar Notificacion
    if (event.data.tipo_mensaje == 'click_editar_notificaciones') {
        //convertir data del iframe a JSON
        const json_notificacion = JSON.parse(event.data.message);
        //detectar si es para Editar con el modal_id
        document.getElementById('editarNotificacion').value = true;
        document.getElementById('editarMailbox').value = json_notificacion.id;
        //cargar información del modal
        document.getElementById('txtTitulo').value = json_notificacion.subject;
        document.getElementById('txtContenido').value = json_notificacion.description;

        if (json_notificacion.group == 0) {
            //mailbox para todos
            document.getElementById("listTodasPersonas").style.visibility = "visible";
            document.getElementById("listTodasPersonas").style.display = "block";
        } else {
            //notificacion UR
            document.getElementById("selectPersonasAsignadas").style.visibility = "visible";
            document.getElementById("selectPersonasAsignadas").style.display = "block";
            //cargar las personas asignadas recibidas del iframe
            var cbl = document.getElementById('CheckBoxPersonasAsignadas').getElementsByTagName("input");
            if (json_notificacion.users) {
                //mailbox con usuarios
                for (i = 0; i < cbl.length; i++) {
                    if (json_notificacion.users.find(element => element == cbl[i].value)) {
                        cbl[i].checked = true;
                        var nombre_persona = cbl[i].nextSibling.textContent
                        var personaAsignada = document.createElement("li");
                        var nombrePersona = document.createTextNode(nombre_persona);
                        var idPersona = document.createAttribute("id");
                        idPersona.value = cbl[i].value;
                        personaAsignada.setAttributeNode(idPersona);
                        personaAsignada.innerHTML = '<span class="float-end text-danger cursor-pointer" onclick="checkBoxListDelete(\'' + cbl[i].value + '\')"><img src="../App_Themes/Tema1/img/eliminar-bote.svg" /> <b>Eliminar</b></span>';
                        personaAsignada.appendChild(nombrePersona);
                        document.getElementById("listPersonasAsignadas").appendChild(personaAsignada);
                        document.getElementById("_allPersonas").style.visibility = "hidden";
                        document.getElementById("_allPersonas").style.display = "none";
                    }
                }
            } else {
                //mailbox para todos UR
                document.getElementById("_allPersonas").style.visibility = "visible";
                document.getElementById("_allPersonas").style.display = "block";
                document.getElementById("_allPersonas").innerHTML = "Todas las Personas";
                CheckBoxTodasPersonas.checked = true;
                for (i = 0; i < cbl.length; i++) cbl[i].checked = true;
            }
        }

        //cargar los documentos recibidos del iframe
        document.getElementById("adjuntos_count").value = json_notificacion.documentos.length;
        //cargar cada documento
        for (adjuntos_total = 0; adjuntos_total < json_notificacion.documentos.length; adjuntos_total++) {
            nuevo_adjuntos_total = adjuntos_total + 1;
            var archivoRelacionado = document.createElement("li");
            var nombreArchivo = document.createTextNode(json_notificacion.documentos[adjuntos_total].nombre);
            var idArchivo = document.createAttribute("id");
            idArchivo.value = json_notificacion.documentos[adjuntos_total].nombre;
            archivoRelacionado.setAttributeNode(idArchivo);
            archivoRelacionado.innerHTML = '<span class="float-end text-danger cursor-pointer" onclick="checkBoxListDelete(\'' + json_notificacion.documentos[adjuntos_total].nombre + '\')" ><input type="hidden" id="adjunto_nombre_' + nuevo_adjuntos_total + '" name="adjunto_nombre_' + nuevo_adjuntos_total + '" /><input type="hidden" id="adjunto_archivo_' + nuevo_adjuntos_total + '" name="adjunto_archivo_' + nuevo_adjuntos_total + '" /><img src="../App_Themes/Tema1/img/eliminar-bote.svg" /> <b>Eliminar</b></span>';
            archivoRelacionado.appendChild(nombreArchivo);
            document.getElementById("listArchivosRelacionados").appendChild(archivoRelacionado);
            document.getElementById("_allArchivo").style.visibility = "hidden";
            document.getElementById("_allArchivo").style.display = "none";
            document.getElementById('adjunto_nombre_' + nuevo_adjuntos_total).value = json_notificacion.documentos[adjuntos_total].nombre;
            document.getElementById('adjunto_archivo_' + nuevo_adjuntos_total).value = json_notificacion.documentos[adjuntos_total].documento_base64;
        }

        var myModal = new bootstrap.Modal(document.getElementById('NotificacionModal'), {
            keyboard: false
        })
        myModal.show();
    }

    // Descargar archivos de la Notificacion
    if (event.data.tipo_mensaje == 'click_ver_archivo_notificaciones') {

        let a = document.createElement("a");
        a.href = "data:application/octet-stream;base64," + event.data.documento_base64;
        a.download = event.data.nombre
        a.click();
    }

    //Permite Abrir Modal para el detalle de la actividad
    if (event.data.accion_evento == 'detalle_actividad_evento') {
        mostrarDetalleEventoPersona(event.data.json_data);
    }

    //Permite Abrir Modal para editar la actividad
    if (event.data.accion_evento == 'editar_actividad_evento_domicilio') {
        asignarDatos(event.data.datos);
    }

    //Permite validar y eliminar una actividad
    if (event.data.accion_evento == 'eliminar_actividad_evento_domicilio') {
        document.getElementById('evento_id').value = event.data.evento_id;
        document.getElementById("modalConfirmar").classList.remove(isVisible);
    }

    //Permite obtener los valores de las personas si tiene dias con actividades
    if (event.data.accion_evento == 'valida_actividad_evento_persona') {
        let persona_disponible = JSON.parse(event.data.json);
        eventoBloqueoListPersona("select-persona-actividad", persona_disponible.persona_emails, persona_disponible.dia_feriado);
    }
};//fin del window.onmessage