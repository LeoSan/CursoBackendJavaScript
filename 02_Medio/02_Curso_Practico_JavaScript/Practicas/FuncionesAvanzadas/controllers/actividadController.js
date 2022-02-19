const isVisible = "d-none";

const asignarDatos = (datos) => {
    document.getElementById("selectPersonasAsignadas").style.visibility = "visible";
    document.getElementById("selectPersonasAsignadas").style.display = "block";

    const val_json = JSON.parse(datos.atributos);
    console.log(val_json);
    let btnSwitchOnOff = document.querySelector("#btnSwitchOnOff");
    //Titulo Modal
    document.getElementById('ContentPlaceHolder1_Titulo').innerText = "Editar actividad";
    btnSwitchOnOff.dataset.estado = '0';
    cambiarSwitchOff();
    //Formulario Evento
    document.getElementById('evento_id').value = datos.id;
    var inhabiles = datos.inhabiles;
    asignarFechasEditar(val_json.fecha_sin, val_json.hora_inicio, val_json.hora_fin, inhabiles);
    document.getElementById('TbTitulo').value = val_json.titulo;
    document.getElementById('tbDescripcion').value = val_json.descripcion;
    //Listados de personas 
    let personas = datos.personas;
    mostrarListaPersonas(personas);
    //Formulario Domicilio

    if (val_json.cp != null) {
        if (val_json.cp.length > 0) {
            document.getElementById('domicilio_id').value = val_json.domicilio_id;
            document.getElementById('tbCP').value = val_json.cp;
            //Select 
            asignarSelectorPorTexto('ContentPlaceHolder1_ddlEstado', val_json.estado);

            document.getElementById('tbMunicipio').value = val_json.municipio_alcaldia;
            document.getElementById('tbColonia').value = val_json.colonia;
            document.getElementById('tbCalle').value = val_json.calle;
            document.getElementById('tbNumeroExt').value = val_json.no_exterior;
            document.getElementById('tbNumeroInt').value = val_json.no_interior;

            //SwitchOn
            cambiarSwitchOn();
            btnSwitchOnOff.dataset.estado = '1';
        }
    }
    //Open el Modal
    document.getElementById("modalSideBar").classList.remove(isVisible);

}

const asignarSelectorPorTexto = (id, valor) => {
    var dd = document.getElementById(id);
    if (dd) {
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === valor) {
                dd.selectedIndex = i;
                break;
            }
        }
    }
}

const asignarFechasEditar = (fecha_inicio, hora_inicio, hora_fin, inhabiles) => {

    //Formulario evento
    var coolDates = setDatesInhabil(inhabiles);
    const fp = flatpickr("#btFecha", {
        mode: 'single',
        altInput: true,
        altFormat: 'j F Y',
        dateFormat: 'Y-m-d',
        minDate: "today",
        onDayCreate: function (dObj, dStr, fp, dayElem) {
            var date_day = +dayElem.dateObj;

            if (typeof coolDates[date_day] != 'undefined') {
                dayElem.className += " cool-date";
                var toolTip = document.createElement('span');
                toolTip.innerHTML = coolDates[date_day];
                dayElem.appendChild(toolTip);
            }
        },
        disable: setDatesInhabilDisable(inhabiles)
    });

    const fp_inicio = flatpickr("#tbHoraInicio", {
        mode: 'single',
        dateFormat: 'H:i',
        enableTime: true,
        noCalendar: true,
    });

    const fp_fin = flatpickr("#tbHoraFinal", {
        mode: 'single',
        dateFormat: 'H:i',
        enableTime: true,
        noCalendar: true,
    });
    //Set valores flatpickr instanciados
    console.log(fecha_inicio)
    fp.setDate(fecha_inicio, true);
    fp_inicio.setDate(hora_inicio, true);
    fp_fin.setDate(hora_fin, true);

}

const cambiarSwitchOff = () => {
    let elementSwitch = document.querySelector("#ContentPlaceHolder1_switchImagenOFF");
    let div_domicilio = document.querySelector(".divDomicilio");
    elementSwitch.setAttribute('src', '../App_Themes/Tema1/img/toggle-disabled.svg');
    div_domicilio.classList.remove('on-domi');
    div_domicilio.classList.add('off-domi');
}

const cambiarSwitchOn = () => {
    let elementSwitch = document.querySelector("#ContentPlaceHolder1_switchImagenOFF");
    let div_domicilio = document.querySelector(".divDomicilio");
    elementSwitch.setAttribute('src', '../App_Themes/Tema1/img/toggle-active.svg');
    div_domicilio.classList.remove('off-domi');
    div_domicilio.classList.add('on-domi');
}

const eventoBloqueoListPersona = (select_personas, persona_emails, feriado) => {
    var checkbox_persona = document.getElementsByClassName(select_personas);

    if (checkbox_persona) {
        for (var i = 0; i < checkbox_persona.length; i++) {
            let input = checkbox_persona[i].firstChild;//Busco el hijo para extraer el valor para comparar
            let parentElement = checkbox_persona[i].childNodes;//Busco todos los hijos y necesito el segundo que es el Label
            parentElement[1].classList.add('align-middle'); //Label 

            //Valido si es feriado
            if (feriado == true) {
                input.setAttribute("disabled", "disabled");
                checkbox_persona[i].classList.add('bloqueo-persona')
                input.checked = false;
            } else {
                if (persona_emails != null) {
                    arr_persona_ids = persona_emails.map(function (elemento) {
                        return elemento.email;
                    })
                    //Si no es feriado pues tiene una actividad o un dia inhabil 
                    if (arr_persona_ids.find(element => element === input.value)) {
                        input.setAttribute("disabled", "disabled"); // Aqui leo
                        checkbox_persona[i].classList.add('bloqueo-persona')
                        input.setAttribute('checked', false);
                        input.checked = false;
                    } else {
                        input.removeAttribute("disabled");
                        checkbox_persona[i].classList.remove('bloqueo-persona')
                    }
                } else {
                    input.removeAttribute("disabled");
                    checkbox_persona[i].classList.remove('bloqueo-persona')
                }

            }

            //Genero el Icono
            dibujarIconCalendario(input.value, checkbox_persona[i]);
        }
    }
}

const mostrarListaPersonas = (json_personas) => {

    console.log(json_personas);

    document.getElementById("listPersonasAsignadas").innerHTML = '<li class="text-center font-weight-bold message-info" id="_allPersonas">Actualmente no existen personas asignadas</li>';
    var checbox = document.getElementById('CheckBoxPersonasAsignadas').getElementsByTagName("input");
    document.getElementById("collapseExample").classList.add('show');

    //Itero 
    json_personas.forEach((item, index) => {
        let separador_data = item.split('*');
        var personaAsignada = document.createElement("LI");
        var nombrePersona = document.createTextNode(separador_data[1]);
        var idPersona = document.createAttribute("id");
        idPersona.value = separador_data[0];
        personaAsignada.setAttributeNode(idPersona);
        personaAsignada.innerHTML = '<span id="btn_bote_basura_' + separador_data[0] + '" class="float-end text-danger cursor-pointer" onclick="checkBoxListPersonaDelete(\'' + separador_data[0] + '\')"><img src="../App_Themes/Tema1/img/eliminar-bote.svg" /></span>';
        personaAsignada.appendChild(nombrePersona);
        personaAsignada.classList.add('elipsis');
        document.getElementById("listPersonasAsignadas").appendChild(personaAsignada);
        document.getElementById("_allPersonas").style.visibility = "hidden";
        document.getElementById("_allPersonas").style.display = "none";

        for (i = 0; i < checbox.length; i++) {
            if (separador_data[0] == checbox[i].value) {
                checbox[i].checked = true;
            }
        }

    });//fin del foreach
}

const dibujarIconCalendario = (valor_id, nodo) => {
    if (document.getElementById('btnVerCalendario_' + valor_id)) nodo.removeChild(document.getElementById('btnVerCalendario_' + valor_id)); //Esto para evitar repetir el icono

    //Creo elemento img
    const img = document.createElement("img");
    img.src = '../App_Themes/Tema1/img/icon-calendar-dorado.svg';
    img.alt = 'Icono calendario Dorado';
    img.classList.add('img-calendar');
    img.classList.add('float-end');

    let id = document.createAttribute("id");
    id.value = 'btnVerCalendario_' + valor_id;
    img.setAttributeNode(id);
    //Extraer nombre 
    let nombre_persona = nodo.lastChild.textContent;
    //Agrego al DOM
    nodo.appendChild(img);
    //Agrego su evento
    document.getElementById('btnVerCalendario_' + valor_id).onclick = function () {
        let win = window.open("/CalendarioActividades/DetalleCalendarioDisponibilidad.aspx?user=" + valor_id + "&nombre_persona=" + nombre_persona, '_blank');
        win.focus();
    };
}

const switchDomicilio = (btnSwitchOnOff, estadoonoff) => {
    if (estadoonoff == 0) {
        btnSwitchOnOff.dataset.estado = '1';
        cambiarSwitchOn();
    } else {
        btnSwitchOnOff.dataset.estado = '0';
        cambiarSwitchOff();
        limpiarDatosDomicilio();
    }
}

const limpiarDatosDomicilio = () => {
    //Datos Formulario Documentos
    document.getElementById('domicilio_id').value = "";
    document.getElementById('tbCP').value = "";
    document.getElementById('tbMunicipio').value = "";
    document.getElementById('tbColonia').value = "";
    document.getElementById('tbCalle').value = "";
    document.getElementById('tbNumeroExt').value = "";
    document.getElementById('tbNumeroInt').value = "";
}

const limpiarFormulario = () => {
    muestraOcultaElemento('selectPersonasAsignadas', 'hidden', 'none');
    asignarFechas("", "", "");
    document.getElementById('TbTitulo').value = "";
    document.getElementById('tbDescripcion').value = "";
    document.getElementById('evento_id').value = "0";

    limpiarDatosDomicilio();

    cambiarSwitchOff();

    document.getElementById("listPersonasAsignadas").innerHTML = '<li class="text-center font-weight-bold message-info" id="_allPersonas">Actualmente no existen personas asignadas</li>';

}

const asignarFechas = (fecha_inicio, hora_inicio, hora_fin) => {
    const miIframe = document.getElementById("iframe-actividad-evento");
    miIframe.contentWindow.postMessage({ accion_evento: "consulta_dias_inhabiles", json_data: JSON.stringify({}) }, "*");

    window.addEventListener("message", ({ data }) => {
        //Resive los dias inhabiles generales
        if (event.data.accion_evento == 'dias_inhabiles_generales') {
            let dias = JSON.parse(event.data.json);
            var coolDates = setDatesInhabil(dias);
            const fp = flatpickr("#btFecha", {
                mode: 'single',
                altInput: true,
                altFormat: 'j F Y',
                dateFormat: 'Y-m-d',
                minDate: "today",
                onDayCreate: function (dObj, dStr, fp, dayElem) {
                    console.log(coolDates[+dayElem.dateObj]);
                    // Checking to see if the current day object is in our array
                    // The `+` is just a shortcut for parsing the date
                    var date_day = +dayElem.dateObj;

                    if (typeof coolDates[date_day] != 'undefined') {
                        dayElem.className += " cool-date";
                        var toolTip = document.createElement('span');
                        toolTip.innerHTML = coolDates[date_day];
                        dayElem.appendChild(toolTip);
                    }
                },
                disable: setDatesInhabilDisable(dias)
            });

            const fp_inicio = flatpickr("#tbHoraInicio", {
                mode: 'single',
                dateFormat: 'H:i',
                enableTime: true,
                noCalendar: true,
            });

            const fp_fin = flatpickr("#tbHoraFinal", {
                mode: 'single',
                dateFormat: 'H:i',
                enableTime: true,
                noCalendar: true,
            });
            //Set valores flatpickr instanciados

            fp.setDate(fecha_inicio, true);
            fp_inicio.setDate(hora_inicio, true);
            fp_fin.setDate(hora_fin, true);

            //Limpio los checbox
            try {
                var checbox = document.getElementById('CheckBoxPersonasAsignadas').getElementsByTagName("input");
                for (i = 0; i < checbox.length; i++) {
                    checbox[i].checked = false;
                }
            } catch (err) {
                console.log("[Mensaje] :-> Este usuario no tiene personal asignado, [Error] :-< ", err);
            }
        }
    });
}

function setDatesInhabil(dias) {
    //Date.parse('2022-02-02 00:00:00')
    var myCar = new Object();
    dias.forEach(function (dia) {

        myCar[Date.parse(dia.fecha + ' 00:00:00')] = dia.descripcion;
    });
    console.log(myCar);
    return myCar;
}

function setDatesInhabilDisable(dias) {
    //Date.parse('2022-02-02 00:00:00')
    var myCar = [];
    dias.forEach(function (dia, key) {

        myCar[key] = dia.fecha;
    });
    console.log(myCar);
    return myCar;
}

const eventoChangeCampoFecha = (idCampo_Fecha, idCampo_hora_inicio, idCampo_hora_fin, idEvento_activador) => {
    if (document.getElementById(idEvento_activador)) {

        document.getElementById(idEvento_activador).addEventListener("change", function () {

            if (document.getElementById(idCampo_Fecha).value.length > 0 && document.getElementById(idCampo_hora_inicio).value.length > 0 && document.getElementById(idCampo_hora_fin).value.length > 0) {
                //Preparo la data para el Iframe 
                let fecha = document.getElementById(idCampo_Fecha).value;
                let fecha_evento_validada = `${fecha} ${document.getElementById(idCampo_hora_inicio).value}`;
                let fecha_fin_evento_validada = `${fecha} ${document.getElementById(idCampo_hora_fin).value}`;

                let data = {
                    fecha_evento: fecha_evento_validada,
                    fecha_fin: fecha_fin_evento_validada,
                    plataforma_id: 1, //Nota :-> Como sacar la plataforma del webconifg
                }

                //Envio la información al iframe 
                const miIframe = document.getElementById("iframe-actividad-evento");
                miIframe.contentWindow.postMessage({ accion_evento: "consulta_fecha_disponibilidad", json_data: JSON.stringify(data) }, "*");

                //Muestro el campo buscador
                muestraOcultaElemento('selectPersonasAsignadas', 'visible', 'block');
            }
        });

    }
}

const checkboxPersona = (select_personas) => {

    var checkbox_persona = document.getElementsByClassName(select_personas);

    if (checkbox_persona) {

        for (var i = 0; i < checkbox_persona.length; i++) {

            //Extraigo al hijo 
            let input_checkbox = checkbox_persona[i].firstChild;
            //Genero data-set
            var input_data_nombre = document.createAttribute("data-nombre");
            input_data_nombre.value = checkbox_persona[i].getAttribute("data-nombre");
            input_checkbox.setAttributeNode(input_data_nombre);
            //Genero Clic dinámico
            input_checkbox.onclick = function () {
                //Valido que no vuelva a meter el componente si ya esta generado
                let valida = document.getElementById('btn_bote_basura_' + input_checkbox.value);

                if (input_checkbox.checked && valida == null) {//Si esta checked y no existe genera uno nuevo 
                    var personaAsignada = document.createElement("li");
                    var nombrePersona = document.createTextNode(input_checkbox.getAttribute("data-nombre")); //checkbox_persona[i].getAttribute("data-nombre")
                    var idPersona = document.createAttribute("id");
                    idPersona.value = input_checkbox.value;
                    personaAsignada.setAttributeNode(idPersona);
                    personaAsignada.innerHTML = '<span id="btn_bote_basura_' + input_checkbox.value + '" class="float-end text-danger cursor-pointer" onclick="checkBoxListPersonaDelete(\'' + input_checkbox.value + '\')"><img src="../App_Themes/Tema1/img/eliminar-bote.svg" alt="Eliminar bote" /></span>';
                    personaAsignada.appendChild(nombrePersona);

                    document.getElementById("listPersonasAsignadas").appendChild(personaAsignada);

                    document.getElementById("_allPersonas").style.visibility = "hidden";
                    document.getElementById("_allPersonas").style.display = "none";
                } else {
                    if (document.getElementById(input_checkbox.value)) {
                        document.getElementById(input_checkbox.value).remove(); //esto quita la selcción inferio junto con el botesito de basura
                    }
                }

                var count = document.getElementById("listPersonasAsignadas").getElementsByTagName("li").length;
                if (count == 1)
                    document.getElementById("listPersonasAsignadas").innerHTML = '<li class="text-center font-weight-bold message-info" id="_allPersonas">Actualmente no existen personas asignadas</li>';
            }
        };
    }

}

const eventokeyUpBuscador = (input_buscador, elemento_lista) => {
    if (document.getElementById(input_buscador)) {
        document.getElementById(input_buscador).addEventListener("keyup", function () {
            document.getElementById("collapseExample").classList.add('show');
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById(input_buscador);
            filter = input.value.toUpperCase();
            table = document.getElementById(elemento_lista);
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
}

const muestraOcultaElemento = (id_selector, visivilida, displys) => {
    document.getElementById(id_selector).style.visibility = visivilida;
    document.getElementById(id_selector).style.display = displys;
}

const mostrarDetalleEventoPersona = (json_data) => {
    console.log(json_data);
    if (json_data.inhabil['valida'] == true) {
        
        document.getElementById("modalDetalleSideBar").classList.remove(isVisible);
        document.getElementById('textFecha').innerText = json_data.inhabil['fecha'];
        document.getElementById('textTitulo').innerText = json_data.inhabil['contenido']['descripcion'];
        var descripcion = json_data.inhabil['contenido']['descripcion'];
 
        if (descripcion != null) {
            document.getElementById('textDescripcion').innerText = descripcion;
            document.getElementById('divDescripcion').classList.remove('d-none');
        } else {
            document.getElementById('textDescripcion').innerText = descripcion;
            document.getElementById('divDescripcion').classList.add('d-none');
        }

        document.getElementById('divPersonas').classList.add('d-none');
        document.getElementById('divDomicilio').classList.add('d-none');
        document.getElementById('divDescripcion').classList.add('ajuste-inhabil');

    } else {

        if (json_data.titulo.length > 0) {

            document.getElementById("modalDetalleSideBar").classList.remove(isVisible);
            document.getElementById('divPersonas').classList.remove('d-none');
            document.getElementById('divDomicilio').classList.remove('d-none');
            document.getElementById('divDescripcion').classList.remove('ajuste-inhabil');

            if (json_data.tipo == 'cierre-parcial') {
                document.getElementById('textFecha').innerText = json_data.fecha_formato;
            } else {
                document.getElementById('textFecha').innerText = json_data.fecha_formato + "  " + json_data.hora_formato;
            }
            
            document.getElementById('textTitulo').innerText = json_data.titulo;
            var descripcion = json_data.descripcion;

            if (descripcion != null) {
                document.getElementById('textDescripcion').innerText = descripcion;
                document.getElementById('divDescripcion').classList.remove('d-none');
            } else {
                document.getElementById('textDescripcion').innerText = descripcion;
                document.getElementById('divDescripcion').classList.add('d-none');
            }


            if (typeof json_data.domicilio === 'undefined') {
                document.getElementById('texDomicilio').innerHTML = 'Este evento no cuenta con un domicilio asignado.';
            } else {
                document.getElementById('texDomicilio').innerHTML = (json_data.hasOwnProperty('formato')) ? json_data.formato['domi_completo'] : 'Este evento no cuenta con un domicilio asignado. ';
            }


            let lista_personas = '';
            json_data.personas_nombre.forEach((item, index) => {
                lista_personas += `<p class="border-dashed"> ${item}</p>`;
            });//fin del foreach
            document.getElementById('texPersonas').innerHTML = lista_personas;
        }

        if (json_data.tipo == 'cierre-parcial') {
            document.getElementById('divDomicilio').classList.remove('d-none');
            document.getElementById('texDomicilio').innerHTML = 'El domicilio de este evento es el mismo que el de la inspección.';
        }

    }

}


module.exports = {
    isVisible,
    asignarDatos,
    asignarSelectorPorTexto,
    asignarFechasEditar,
    cambiarSwitchOff,
    cambiarSwitchOn,
    eventoBloqueoListPersona,
    mostrarListaPersonas,
    dibujarIconCalendario,
    limpiarFormulario,
    limpiarDatosDomicilio,
    switchDomicilio,
    asignarFechas,
    eventoChangeCampoFecha,
    checkboxPersona,
    eventokeyUpBuscador,
    muestraOcultaElemento,
    mostrarDetalleEventoPersona
}