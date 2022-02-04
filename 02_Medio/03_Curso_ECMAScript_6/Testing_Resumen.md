# Pruebas Usando test Jest  Resumen 

## Paso 1: Validar el package.Json si esta instalado el testing y su script 

```
  --Vaidar dependencias--
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3"
  },
  
  --scripts--
  
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  
```

## Paso 2: Crear la carpeta test 
- En raiz creamos una carpeta llamada `__tests__`  
- Dentro de esa carpeta podemos crear las diferentes pruebas para cada componenete
- Aqui pondremos nuestras pruebas llamandola de la siguiente forma Ejemplo-> `formulario_test.js`

## Paso 3: Manera de ejecutarlo 
- La manera de ejecutar nuestras pruebas es usando el comando  -> `npm run test` pero debemos asegurarnos que el script este en el package.json 
- Manera basica de validar nuestras pruebas es colocar la siguiente codificación 

```
test('Probando nuestro test luego de ejecutar el comando test', ()=>{

//Aqui va nuestra prueba 

});
```

## Paso 4: Forma de agrupar nuestras pruebas
- Luego de a ver creado la estrcutura para hacer pruebas podemos hacer lo siguiente en nuestro arhivo-> `__tests_/formulario_test.js` podemos anexar el siguiente bloque de código
```
////Nos describe la prueba Etiqueta indicando que estamos probando formulario 
// Nota podemos usar it ó test pero juan usa test asi que sigamos lo que el dice 
it/test('<Formulario/> Cargar el formulario y calidar que todo este correcto', ()=>{


}); 


test('<Formulario/> Validación de formulario', ()=>{

}); 
 
``` 

## Paso 4: Ya para hacer pruebas 

- Ya no es necesario importar react from, pero por si las moscas lo importamos `import  React from 'react'`
- Debemos importar la libreria render -> `import  {render, screen} from '@testing-library/react'`
     Esta libreria tiene todos los metodos para probar componentes en react -> Esto permite montar un componente 
- Debemos importar ->`import @testing-library/jest-dom/extend-expect` para que la prueba pueda leer el DOM 
- Debemos importar el componente que deseamos validar podemos hacer lo siguiente: 
```
import  React from 'react'
import  {render} from '@testing-library/react'
import Formulario from '../componenente/Formulario';


test('<Formulario/> Validación de formulario', ()=>{
	
	//Esta forma te permite ver el contenido del componente solo eso 
	//const wrapper = render(<Formulario/>); 
	//wrapper.debug();

}); 
```
## Podemos hacer esto para hacer pruebas de que si los titulos estan correctos en tu interfaz 
```
import  React from 'react'
import  {render} from '@testing-library/react'
import Formulario from '../componenente/Formulario';


test('<Formulario/> Validación de formulario', ()=>{
	
	// Validar titulo Forma 1 
	const {getByText} = render(<Formulario/>);
	expect( getByText('Crear Cita') ).toBeInTheDocument(); //-> Aqui le indicas lo que esperas de tu validación
	
	// Validar titulo Forma 2 Juan dice que se recomienda esta forma
	render(<Formulario/>);
	expect( screen.getByText('Crear Cita') ).toBeInTheDocument(); //-> Aqui le indicas lo que esperas de tu validación
	

}); 
```

## PRUEBAS POR IDS.
- Es un poco ladilla debes poner cada elemento de tu html un data set ejemplo -> <h2 data-testid="titulo"> Crear Título </h2>

```
import  React from 'react'
import  {render} from '@testing-library/react'
import Formulario from '../componenente/Formulario';


test('<Formulario/> Validación de formulario', ()=>{

	//Cargamos el formulario
	render(<Formulario/>);
	
	//Podemos crear nuestras variables 
	const titulo = screen.getByTestId('titulo');
	
	// Validar titulo 
	expect( titulo.tagName ).toBe('H2'); //-> validacion correcta 
	expect( screen.getByTestId('titulo').tagName ).not.toBe('H1'); //-> validación negada
	expect( screen.getByTestId('titulo').textContent ).toBe('Crear Cita'); //-> Validamos si el titulo es correcto
	
	//Validar Boton 
	expect( screen.getByTestId('btn-submit').tagName ).toBe('BUTTON'); //-> Validamos boton sea un tag boton 
	expect( screen.getByTestId('btn-submit').textContent ).toBe('Agregar Cita'); //-> Validamos el titulo del boton 
	
}); 

