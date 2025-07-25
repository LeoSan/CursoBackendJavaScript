// Función alternativa con más control y opciones
function navegarConControl(tiempoEspera = 2000, maxPaginas = null) {
    let contadorPaginas = 1;
    let procesoContinua = true;
    var productsFoundGlobal = [];
    
    // Función para detener el proceso manualmente
    window.detenerNavegacion = function() {
        procesoContinua = false;
        console.log('🛑 Navegación detenida manualmente');
    };
    //Aquí generar el arreglo 
    function validarData( NombreCssMaster = '.sc-list-item-row-description__info', stockEvaluar = 500){
    const productsFound = [];

    const descriptionInfoElements = document.querySelectorAll(NombreCssMaster);

    descriptionInfoElements.forEach(function(infoElement) {
        const textContent = infoElement.textContent;
        const cleanTextContent = textContent.replace(/,/g, '');
        const match = cleanTextContent.match(/\d+/);

        if (match) {
        const numericValue = parseInt(match[0], 10);

        if (numericValue < stockEvaluar) {
            // Opcional: Mantener el resaltado visual
            infoElement.style.backgroundColor = 'orange';
            infoElement.style.border = '2px solid darkorange';
            infoElement.style.color = 'white';

            const parentDescriptionContainer = infoElement.closest('.sc-list-item-row-description');

            if (parentDescriptionContainer) {
            const idElement = parentDescriptionContainer.querySelector('.sc-list-item-row-description__id');
            const titleElement = parentDescriptionContainer.querySelector('.sc-list-item-row-description__title');
            // Nuevo: Buscar el elemento de envío (shipping icon)
            const shippingIconElement = parentDescriptionContainer.querySelector('.sc-list-item-row-description__shipping__icon');

            let idText = 'ID no encontrado';
            if (idElement) {
                idText = idElement.textContent.trim();
            }

            let titleText = 'Título no encontrado';
            if (titleElement) {
                titleText = titleElement.textContent.trim();
            }

            // Determinar si es "FULL"
            const isFull = shippingIconElement ? 'Full' : 'Colecta';

            productsFoundGlobal.push({
                id: idText,
                title: titleText,
                stock: numericValue, // STOCK
                isFull: isFull // Añadir la nueva propiedad
            });
            }
        }
        }
    });

    //return productsFound;
    }

    function generaDescarCSV(productsFound, marca = 'maketer'){
    console.log('Productos con unidades menores a 500:', productsFound);
    if (productsFound.length > 0) {
        // Encabezado del CSV con la nueva columna
        let csvContent = 'ID,Titulo,stock,Tipo Envio\n';

        productsFound.forEach(product => {
        const sanitizedId = `"${product.id.replace(/"/g, '""')}"`;
        const sanitizedTitle = `"${product.title.replace(/"/g, '""')}"`;
        const sanitizedStock = `"${product.stock}"`;
        const sanitizedIsFull = `"${product.isFull.replace(/"/g, '""')}"`; // Asegurar que también se sanea por si acaso

        // Añadir la nueva columna al final de cada fila
        csvContent += `${sanitizedId},${sanitizedTitle},${sanitizedStock},${sanitizedIsFull}\n`;
        });

        const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        //a.download = 'productos_menos_500_unidades.csv';
        a.download = marca+'_productos_menos_500_unidades_'+Date.now();+'.csv'

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return true; 
    } else {
        console.log('No se encontraron productos con unidades menores a 500 para generar el CSV.');
        return false; 
    }    
    }

    function irSiguientePagina() {
        if (!procesoContinua) return;
        
        // Verificar si se alcanzó el límite máximo de páginas
        if (maxPaginas && contadorPaginas >= maxPaginas) {
            console.log(`🔄 Se alcanzó el límite de ${maxPaginas} páginas.`);
            return;
        }
        
        const botonSiguiente = document.querySelector('.andes-pagination__button--next:not(.andes-pagination__button--disabled) .andes-pagination__link');
        
        if (botonSiguiente && procesoContinua) {
            console.log(`📄 Página ${contadorPaginas} → Navegando a página ${contadorPaginas + 1}`);
            
            botonSiguiente.click();
            contadorPaginas++;

            //Implementar    
            validarData()
            
            setTimeout(() => {
                irSiguientePagina();
            }, tiempoEspera);
            
        } else {
            console.log(`✅ Navegación completada. Total de páginas visitadas: ${contadorPaginas}`);
            console.log(`✅ Total: ${productsFoundGlobal.length}`);

            if (!botonSiguiente) {
                generaDescarCSV(productsFoundGlobal, 'NUBE')
                console.log('🏁 No hay más páginas disponibles.');
            }
        }
    }
    
    console.log('🚀 Iniciando navegación controlada...');
    console.log(`⏱️ Tiempo de espera entre páginas: ${tiempoEspera}ms`);
    console.log(`📊 Límite máximo: ${maxPaginas || 'Sin límite'} páginas`);
    console.log('💡 Para detener manualmente, ejecuta: detenerNavegacion()');
    
    setTimeout(() => {
        irSiguientePagina();
    }, 1000);
}
