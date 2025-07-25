//Si no deja copiar y pegar en el navegador escribir a mano -> allow pasting 

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

          productsFound.push({
            id: idText,
            title: titleText,
            isFull: isFull // Añadir la nueva propiedad
          });
        }
      }
    }
  });

  return productsFound;
}


function generaDescarCSV(productsFound, marca = 'maketer'){
   console.log('Productos con unidades menores a 500:', productsFound);
   if (productsFound.length > 0) {
    // Encabezado del CSV con la nueva columna
    let csvContent = 'ID;Titulo;Tipo Envio\n';

    productsFound.forEach(product => {
      const sanitizedId = `"${product.id.replace(/"/g, '""')}"`;
      const sanitizedTitle = `"${product.title.replace(/"/g, '""')}"`;
      const sanitizedIsFull = `"${product.isFull.replace(/"/g, '""')}"`; // Asegurar que también se sanea por si acaso

      // Añadir la nueva columna al final de cada fila
      csvContent += `${sanitizedId},${sanitizedTitle},${sanitizedIsFull}\n`;
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
  } else {
    console.log('No se encontraron productos con unidades menores a 500 para generar el CSV.');
  }  
}







  

