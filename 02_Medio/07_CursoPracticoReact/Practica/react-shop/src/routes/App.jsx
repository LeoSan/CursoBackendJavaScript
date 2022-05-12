//Paquetes o Librerias 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Estilos CSS
import '../styles/global.scss'; 

//Componentes 
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Recovery from '../containers/Recovery';


//Page
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';



const App = () => {
	return (
		<BrowserRouter>
		<Layout>
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/recovery-password" element={<Recovery />} />
			<Route path="*" element={<NotFound />} />
		  </Routes>
		</Layout>
	  </BrowserRouter>
	);
}

export default App;
