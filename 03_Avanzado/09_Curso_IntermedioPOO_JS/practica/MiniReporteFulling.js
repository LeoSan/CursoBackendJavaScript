// Función alternativa con más control y opciones
// Función alternativa con más control y opciones
function navegarConControl(tiempoEspera = 2000, marcaParam = "Marketer", maxPaginas = null, stockMin = 500, stockMax = null) {
    let contadorPaginas = 1;
    let procesoContinua = true;
    var productsFoundGlobal = [];

    // Función para detener el proceso manualmente
    window.detenerNavegacion = function () {
        procesoContinua = false;
        console.log('🛑 Navegación detenida manualmente');
    };
    //Aquí generar el arreglo 
    function validarData(NombreCssMaster = '.sc-list-item-row-description__info', stockEvaluar = 500, stockEvaluarBetween = null) {
        const productsFound = [];

        const descriptionInfoElements = document.querySelectorAll(NombreCssMaster);

        descriptionInfoElements.forEach(function (infoElement) {
            const textContent = infoElement.textContent;
            const cleanTextContent = textContent.replace(/,/g, '');
            const match = cleanTextContent.match(/\d+/);
            if (match) {
                const stock = parseInt(match[0], 10);
                let cumpleCondicion = false;

                // Determinar qué condición aplicar
                if (stockEvaluarBetween !== null && stockEvaluarBetween !== undefined) {
                    // Modo RANGO: buscar productos entre stockEvaluar y stockEvaluarBetween
                    cumpleCondicion = (stock >= stockEvaluar && stock <= stockEvaluarBetween);
                } else {
                    // Modo ORIGINAL: buscar productos menores a stockEvaluar
                    cumpleCondicion = (stock < stockEvaluar);
                }

                if (cumpleCondicion) {
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
                            idText = idElement.textContent.trim().replace("#","MLM");
                        }

                        let titleText = 'Título no encontrado';
                        if (titleElement) {
                            titleText = titleElement.textContent.trim();
                        }

                        // Determinar si es "FULL"
                        const isFull = shippingIconElement ? 'Full' : 'Colecta';
						let shippingInformation = document.getElementById(`shipping-${idText.replace('#', 'MLM')}`);
                        let evalua_price = shippingInformation.querySelector('.sc-list-actionable-cell__group-text .sc-list-actionable-cell__price--no-wrap');
                        let price = evalua_price? evalua_price.textContent:shippingInformation.querySelector('.sc-list-actionable-cell__title').textContent;



                        // NUEVO: Extraer precios usando el ID del producto
                        let precioSinOferta = 'No encontrado';
                        let precioVenta = 'No encontrado';
                        
                        if (idText && idText !== 'ID no encontrado') {
                            // Construir el ID del contenedor de precios
                            const priceContainerId = `price-${idText}`;
                            console.log(priceContainerId);
                            const priceContainer = document.getElementById(priceContainerId);
                            
                            if (priceContainer) {
                                // Buscar precio sin oferta (precio tachado principal)
                                const precioSinOfertaElement = priceContainer.querySelector('.sc-list-text--primary span').innerText.replace("$","").replace(",","");
                                if (precioSinOfertaElement) {
                                    precioSinOferta = precioSinOfertaElement;
                                }
                                
                                // Buscar precio de venta (Lo vendes a)
                                if(priceContainer.querySelector('.sc-list-text--secondary .sc-list-actionable-cell__price--no-wrap')){
                                    const precioVentaElement = priceContainer.querySelector('.sc-list-text--secondary .sc-list-actionable-cell__price--no-wrap').innerText.replace("$","").replace(",","");
                                    if (precioVentaElement) {
                                        precioVenta = precioVentaElement;
                                    }
                                }else{
                                    precioVenta = "No hay precio oferta";
                                }
                                
                                
                                console.log(`💰 Precios para ${idText}: Sin oferta: ${precioSinOferta}, Venta: ${precioVenta}`);
                            } else {
                                console.log(`⚠️ No se encontró contenedor de precios para ${idText}`);
                            }
                        }

                        productsFoundGlobal.push({
                            id: idText,
                            title: titleText,
                            stock: stock, // STOCK
                            isFull: isFull, // Añadir la nueva propiedad
                            precioSinOferta: precioSinOferta, // NUEVO: Precio sin oferta
                            precioVenta: precioVenta, // NUEVO: Precio de venta
							price: corregirCaracteres(price)
                        });
                    }
                }
            }
        });

        //return productsFound;
    }

    function generaDescarCSV(productsFound, marca = 'maketer') {
        // Generar mensajes dinámicos basados en stockMin y stockMax
        let mensajeConsole, nombreArchivo, mensajeError;
        
        if (stockMax !== null && stockMax !== undefined) {
            // Modo RANGO
            mensajeConsole = `Productos con unidades de entre ${stockMin} a ${stockMax}:`;
            nombreArchivo = marca + '_productos_de_entre_' + stockMin + '_' + stockMax + '_unidades_' + Date.now() + '.csv';
            mensajeError = `No se encontraron productos con unidades entre ${stockMin} a ${stockMax} para generar el CSV.`;
        } else {
            // Modo ORIGINAL
            mensajeConsole = `Productos con unidades menores a ${stockMin}:`;
            nombreArchivo = marca + '_productos_menos_' + stockMin + '_unidades_' + Date.now() + '.csv';
            mensajeError = `No se encontraron productos con unidades menores a ${stockMin} para generar el CSV.`;
        }

        console.log(mensajeConsole, productsFound);
        
        if (productsFound.length > 0) {
            // Encabezado del CSV con las nuevas columnas de precios
            let csvContent = '\uFEFF'; // ← BOM para UTF-8
                csvContent += 'ID,Titulo,Stock,Tipo Envio,Precio Sin Oferta,Precio Venta, Precio\n';

            productsFound.forEach(product => {
                const sanitizedId = `"${product.id.replace(/"/g, '""')}"`;
                const sanitizedTitle = `"${product.title.replace(/"/g, '""')}"`;
                const sanitizedStock = `"${product.stock}"`;
                const sanitizedIsFull = `"${product.isFull.replace(/"/g, '""')}"`;
                const sanitizedPrecioSinOferta = `"${product.precioSinOferta.replace(/"/g, '""')}"`;
                const sanitizedPrecioVenta = `"${product.precioVenta.replace(/"/g, '""')}"`;
				const sanitizedPrice = `"${product.price.replace(/"/g, '""')}"`; 

                // Añadir las nuevas columnas de precios
                csvContent += `${sanitizedId},${sanitizedTitle},${sanitizedStock},${sanitizedIsFull},${sanitizedPrecioSinOferta},${sanitizedPrecioVenta},${sanitizedPrice}\n`;
            });

            const blob = new Blob([csvContent], {
                type: 'text/csv;charset=utf-8;'
            });

            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = nombreArchivo;

            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            return true;
        } else {
            console.log(mensajeError);
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
            validarData('.sc-list-item-row-description__info', stockMin, stockMax);

            setTimeout(() => {
                irSiguientePagina();
            }, tiempoEspera);

        } else {
            validarData('.sc-list-item-row-description__info', stockMin, stockMax);
            console.log(`✅ Navegación completada. Total de páginas visitadas: ${contadorPaginas}`);
            console.log(`✅ Total: ${productsFoundGlobal.length}`);

            if (!botonSiguiente) {
                generaDescarCSV(productsFoundGlobal, marcaParam)
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


/**abrir acorrdeon */

function openAccordion(selector = "#trigger-content-row-label"){
    let showAccordion = document.querySelectorAll(selector);
    showAccordion.forEach(function(sa){ 
        sa.click();
    });
};

function corregirCaracteres(texto) {
    if (!texto) return texto;
    
    const correcciones = {
        'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
        'Ã': 'Á', 'Ã‰': 'É', 'Ã': 'Í', 'Ã"': 'Ó', 'Ãš': 'Ú',
        'Ã±': 'ñ', 'Ã': 'Ñ',
        'Ã¼': 'ü', 'Ãœ': 'Ü',
        'Â¿': '¿', 'Â¡': '¡',
        'Â°': '°', 'Â´': '´',
        'â€œ': '"', 'â€': '"', 'â€™': "'", 'â€˜': "'",
        'â€"': '–', 'â€"': '—'
    };
    
    let textoCorregido = texto;
    for (const [incorrecto, correcto] of Object.entries(correcciones)) {
        textoCorregido = textoCorregido.replace(new RegExp(incorrecto, 'g'), correcto);
    }
    
    return textoCorregido;
}

//navegarConControl(6000,'KABUDU',null,0,3000);
