//Paquetes o Librerias 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Estilos CSS
import '../styles/global.scss'; 

//Componentes 
import Layout from '../containers/Layout';
import Recovery from '../containers/Recovery';

//Page
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import Newpass from '../pages/Newpass';
import Articles from '../pages/Articles';
import CheckList from '../pages/CheckList';



const App = () => {
	return (
		<BrowserRouter>
		<Layout>
		  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/recovery" element={<Recovery />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/create" element={<CreateAccount />} />
			<Route path="/newpass" element={<Newpass />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/check-list" element={<CheckList />} />
		  </Routes>
		</Layout>
	  </BrowserRouter>
	);
}

export default App;
