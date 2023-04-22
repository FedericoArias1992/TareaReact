import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import { Routes } from 'react-router-dom'; //esta linea sustituye al switch
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


{/*Necesitamos trabajar con el "provider"(el que nos permite encapsular nuetra app)*/}
const App = () => {
	const initialState = useInitialState(); //inicializamos el estado que muestra la cant.de items nel carrito
	return (
		<AppContext.Provider value={initialState}>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route exact path="/password-recovery" element={<PasswordRecovery />} />
					<Route exact path="/send-email" element={<SendEmail />} />
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/account" element={<MyAccount/>} />
					{/*ANTES SE DEFINIA ASI: <Route exact path="/send-email" component={SendEmail} />*/}
					<Route exact path="/signup" element={<CreateAccount />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route path="*" element={NotFound} />
				</Routes>	
			</Layout>
		</BrowserRouter>
		</AppContext.Provider>

	);
}

export default App;