if (document.getElementById('buttonToggleResumen')) {
    var svg_mostrar = '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">< title > 27) Icon/plus-circle-fill</title ><defs><path d="M8.7,3.6 C8.97614237,3.6 9.2,3.82385763 9.2,4.1 L9.2,6.8 L11.9,6.8 C12.1761424,6.8 12.4,7.02385763 12.4,7.3 L12.4,8.7 C12.4,8.97614237 12.1761424,9.2 11.9,9.2 L9.2,9.2 L9.2,11.9 C9.2,12.1761424 8.97614237,12.4 8.7,12.4 L7.3,12.4 C7.02385763,12.4 6.8,12.1761424 6.8,11.9 L6.8,9.2 L4.1,9.2 C3.82385763,9.2 3.6,8.97614237 3.6,8.7 L3.6,7.3 C3.6,7.02385763 3.82385763,6.8 4.1,6.8 L6.8,6.8 L6.8,4.1 C6.8,3.82385763 7.02385763,3.6 7.3,3.6 L8.7,3.6 Z M8,0 C3.5888,0 0,3.5888 0,8 C0,12.4112 3.5888,16 8,16 C12.4112,16 16,12.4112 16,8 C16,3.5888 12.4112,0 8,0" id="path-1"></path></defs><g id="Version-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="27)-Icon/plus-circle-fill"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="🎨-Icon-Сolor" fill="#FFFFFF" xlink:href="#path-1"></use></g></g></svg >';
    var svg_ocultar = '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">< title > 27) Icon/minus-circle-fill</title ><defs><path d="M4.1,6.8 L11.9,6.8 C12.1761424,6.8 12.4,7.02385763 12.4,7.3 L12.4,8.7 C12.4,8.97614237 12.1761424,9.2 11.9,9.2 L4.1,9.2 C3.82385763,9.2 3.6,8.97614237 3.6,8.7 L3.6,7.3 C3.6,7.02385763 3.82385763,6.8 4.1,6.8 Z M8,0 C3.5888,0 0,3.5888 0,8 C0,12.4112 3.5888,16 8,16 C12.4112,16 16,12.4112 16,8 C16,3.5888 12.4112,0 8,0" id="path-1"></path></defs><g id="Version-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="expediente-4" transform="translate(-1132.000000, -245.000000)"><g id="27)-Icon/minus-circle-fill" transform="translate(1132.000000, 245.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask><use id="🎨-Icon-Сolor" fill="#FFFFFF" xlink:href="#path-1"></use></g></g></g></svg >';
    var btn_resumen = document.getElementById('buttonToggleResumen');
    if (document.getElementById('buttonToggleResumenDesahogo')) {
        btn_resumen = document.getElementById('buttonToggleResumenDesahogo');
    }
    var resumen = document.getElementsByClassName('resumen')[0];
    btn_resumen.innerHTML = "<span>Mostrar resumen </span> " + svg_mostrar;
    btn_resumen.addEventListener("click", function () {
        resumen.classList.toggle('d-none');
        btn_resumen.innerHTML = "<span>Mostrar resumen </span> " + svg_mostrar;
        btn_resumen.appendChild
        if (resumen.classList.contains('d-none') == false){
            btn_resumen.innerHTML = "<span>Ocultar resumen </span> " + svg_ocultar;
        }
    });

    var botones_datos = document.getElementsByClassName('show-datos');
    Array.prototype.forEach.call(botones_datos, function (btn_datos, index) {
        if (index == 0) {
            btn_datos.classList.add('active');
            document.getElementById(btn_datos.dataset.id).classList.remove('d-none');
        }
        btn_datos.addEventListener('click', function (btn) {
            deleteShowAndActive();
            btn_datos.classList.add('active');
            document.getElementById(btn_datos.dataset.id).classList.remove('d-none');
        });
    });
}

function deleteShowAndActive(){
    var botones_datos = document.getElementsByClassName('show-datos');
    Array.prototype.forEach.call(botones_datos, function (btn_datos) {
        btn_datos.classList.remove('active');
    });

    var datos_desahogo = document.getElementsByClassName('datos');
    Array.prototype.forEach.call(datos_desahogo, function (content_datos) {
        if (!content_datos.classList.contains('d-none')) {
            content_datos.classList.add('d-none');
        }
    });
}

