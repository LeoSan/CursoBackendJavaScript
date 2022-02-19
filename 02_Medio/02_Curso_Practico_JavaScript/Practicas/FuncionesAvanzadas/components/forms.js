if (document.getElementById('CheckBoxTodasPersonas')) {
    document.getElementById('CheckBoxTodasPersonas').addEventListener("click", function () {
        var cbl = document.getElementById('CheckBoxPersonasAsignadas').getElementsByTagName("input"); //<%=CheckBoxPersonasAsignadas.ClientID %>
        var list = document.getElementById("listPersonasAsignadas");
        while (list.lastChild.id !== '_allPersonas') {
            list.removeChild(list.lastChild);
        }
        document.getElementById("_allPersonas").style.visibility = "visible";
        document.getElementById("_allPersonas").style.display = "block";
        if (this.checked) {
            document.getElementById("_allPersonas").innerHTML = "Todas las Personas";
            document.getElementById('CheckBoxPersonasAsignadas').classList.add("d-none");
            for (i = 0; i < cbl.length; i++) cbl[i].checked = true;
        } else {
            document.getElementById('CheckBoxPersonasAsignadas').classList.remove("d-none");
            document.getElementById("_allPersonas").innerHTML = "Actualmente no existen personas asignadas";
            for (i = 0; i < cbl.length; i++) cbl[i].checked = false;
        }
    });
}


var checkbox_persona = document.getElementsByClassName("select-checkbox-persona");
for (var i = 0; i < checkbox_persona.length; i++) {
    checkbox_persona[i].onclick = function () {
        if (this.childNodes[0].checked) {
            var personaAsignada = document.createElement("li");
            var nombrePersona = document.createTextNode(this.getAttribute("data-nombre"));
            var idPersona = document.createAttribute("id");
            idPersona.value = this.childNodes[0].value;
            personaAsignada.setAttributeNode(idPersona);
            personaAsignada.innerHTML = '<span class="float-end text-danger cursor-pointer" onclick="checkBoxListDelete(\'' + this.childNodes[0].value + '\')"><img src="../App_Themes/Tema1/img/eliminar-bote.svg" /> <b>Eliminar</b></span>';
            personaAsignada.appendChild(nombrePersona);
            document.getElementById("listPersonasAsignadas").appendChild(personaAsignada);
            document.getElementById("_allPersonas").style.visibility = "hidden";
            document.getElementById("_allPersonas").style.display = "none";
        } else {
            document.getElementById(this.childNodes[0].value).remove();
        }
    }
};

if (document.getElementById('myInput')) {
    document.getElementById('myInput').addEventListener("keyup", function () {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("CheckBoxPersonasAsignadas");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
}



if (document.getElementById('fuArchivo')) {
    document.getElementById('fuArchivo').addEventListener('change', function () {
        //se obtiene el total de documentos agregados
        var adjuntos = parseInt(document.getElementById("adjuntos_count").value);
        var adjuntos_total = adjuntos + 1;
        document.getElementById("adjuntos_count").value = adjuntos_total;
        var file = document.getElementById("fuArchivo");
        for (i = 0; i < file.files.length; i++) {
            fileSize = parseInt(file.files[i].size, 10) / 1024;
            filesize_kb = Math.round(fileSize);
            txtErrorSizeMb.innerHTML = "";
            if (filesize_kb > 3000) {
                //validar tamaño
                txtErrorSizeMb.innerHTML = "El tamaño del archivo no debe de exceder de 3Mb.";
            } else {
                //visualizar los documentos agregados
                var archivoRelacionado = document.createElement("li");
                var nombreArchivo = document.createTextNode(file.files[i].name);
                var idArchivo = document.createAttribute("id");
                idArchivo.value = file.files[i].name;
                archivoRelacionado.setAttributeNode(idArchivo);
                archivoRelacionado.innerHTML = '<span class="float-end text-danger cursor-pointer" onclick="checkBoxListDelete(\'' + file.files[i].name + '\')" ><input type="hidden" id="adjunto_nombre_' + adjuntos_total + '" name="adjunto_nombre_' + adjuntos_total + '" /><input type="hidden" id="adjunto_archivo_' + adjuntos_total + '" name="adjunto_archivo_' + adjuntos_total + '" /><img src="../App_Themes/Tema1/img/eliminar-bote.svg" /> <b>Eliminar</b></span>';
                archivoRelacionado.appendChild(nombreArchivo);
                document.getElementById("listArchivosRelacionados").appendChild(archivoRelacionado);
                document.getElementById("_allArchivo").style.visibility = "hidden";
                document.getElementById("_allArchivo").style.display = "none";
                document.getElementById('adjunto_nombre_' + adjuntos_total).value = file.files[i].name;

                var fr = new FileReader();
                fr.onload = function () {
                    //convierte en base64 los documentos
                    document.getElementById('adjunto_archivo_' + adjuntos_total).value = fr.result.replace(/^data:.+;base64,/, '');
                }
            }
        }
        fr.readAsDataURL(this.files[0]);
    });

}

var radio_menu = document.getElementsByClassName("select-radio-menu");
for (var i = 0; i < radio_menu.length; i++) {
    radio_menu[i].onclick = function () {
        document.getElementById("select_value").value = this.getAttribute("value");
    }
}

var label_menu = document.getElementsByClassName("select-label-menu");
for (var i = 0; i < label_menu.length; i++) {
    label_menu[i].onclick = function () {

        var inputCheckt = document.getElementById("flexRadio" + this.getAttribute('aria-controls'));
        if (inputCheckt) {
            inputCheckt.checked = true;
            document.getElementById("select_value").value = inputCheckt.getAttribute("value");
        }

        var opciconMenu = document.getElementById("flexImage" + this.getAttribute('aria-controls'));
        if (opciconMenu) {
            var current_rotation = parseInt(opciconMenu.getAttribute('value')) + 180;
            document.getElementById("flexImage" + this.getAttribute('aria-controls')).style.transform = "rotate(" + current_rotation + "deg)";
            document.getElementById("flexImage" + this.getAttribute('aria-controls')).setAttribute("value", current_rotation);
        }
       
    }
}


var selectMenu = document.getElementsByClassName("btnSeleccionarMenu");
for (var i = 0; i < selectMenu.length; i++) {
    selectMenu[i].onclick = function () {
        document.getElementById('SeleccionarMenu').click();
    }
}

var selectMenuDesahogo = document.getElementsByClassName("btnSeleccionarMenuDesahogo");
for (var i = 0; i < selectMenuDesahogo.length; i++) {
    selectMenuDesahogo[i].onclick = function () {
        document.getElementById("menu_desahogo_redirect").value = this.getAttribute("id");
        document.getElementById('SeleccionarMenuDesahogo').click();
    }
}



// validar formulario actividades
var save = document.getElementsByClassName("btn-guardar-actividad");

for (var increment = 0; increment < save.length; increment++) {
    save[increment].onclick = function (evt) {
        
        var message = document.getElementById("message-error");
        message.innerHTML = "";
        message.classList.add("d-none");
        var form = this.getAttribute('data-form');
        var requered = document.getElementsByClassName(form + "-requiered");

        for (var increment = 0; increment < requered.length; increment++) {
            if (requered[increment].value == "") {
                evt.preventDefault();
                message.innerHTML = "Favor de llenar los campos requeridos";
                message.classList.remove("d-none");
                return;
            }
        }

        var count = document.getElementById("listPersonasAsignadas").getElementsByTagName("li").length;
        if (count == 1) {
            evt.preventDefault();
            message.innerHTML = "Favor de seleccionar al menos una persona al evento";
            message.classList.remove("d-none");
        }
    }
};
