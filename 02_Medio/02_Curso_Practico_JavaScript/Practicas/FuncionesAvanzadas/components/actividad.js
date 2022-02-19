/*
 * Importamos
 */
const { isVisible, limpiarFormulario, switchDomicilio, eventoChangeCampoFecha, checkboxPersona, eventokeyUpBuscador } = require('../controllers/actividadController');

/*
 * Declaración Variables
 */
const btnSwitchOnOff = document.getElementById("btnSwitchOnOff");
const openModel = document.getElementById("btnNuevaActividad");
const cerrarModal = document.getElementById("btnCancelar");
const cerrarModalConfirm = document.getElementById("btnCerrarConfirm");

if (openModel) {

    openModel.addEventListener("click", function () {
        limpiarFormulario();
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.remove(isVisible);
    });

    cerrarModal.addEventListener("click", function () {
        const modalId = this.dataset.close;
        document.getElementById(modalId).classList.add(isVisible);
    });

    cerrarModalConfirm.addEventListener("click", function () {
        document.getElementById("modalConfirmar").classList.add(isVisible);
    });

    btnSwitchOnOff.addEventListener("click", function () {
        switchDomicilio(btnSwitchOnOff, this.dataset.estado);
    });
}

//Activar Componente busqueda y selección de personas 
eventoChangeCampoFecha('btFecha', 'tbHoraInicio', 'tbHoraFinal', 'btFecha');
eventoChangeCampoFecha('btFecha', 'tbHoraInicio', 'tbHoraFinal', 'tbHoraInicio');
eventoChangeCampoFecha('btFecha', 'tbHoraInicio', 'tbHoraFinal', 'tbHoraFinal');

//Lista de personas y bloqueo de aquellos usuarios que no tienen disponibilidad
checkboxPersona("select-persona-actividad");
eventokeyUpBuscador("tbBuscarPersonas", "CheckBoxPersonasAsignadas");