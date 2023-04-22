import React from 'react';
import '@components/styles/global.scss';
import '@components/styles/Login.scss';
import logo_yard from '@logos/logo_yard_sale.svg';
//import Menu from '../components/Menu';    -   usamos la notacion en verde para mostrar un componente (Menu.jsx) en la plantilla de login
import {useRef} from 'react';
//https://developer.mozilla.org/en-US/docs/Web/API/FormData - mas sobre formData

const Login = () => {
    const form = useRef(null);  //inicializamos con valor nulo pq los elementos usuario y contraseña no tienen valor hasta que son ingresados los inputs
    const handleSubmit =(event)=>{   //es la funcion que leerá los inputs del formulario
        event.preventDefault();     //para evitar que html lo maneje estandar y envie los inputs por la url y los mande al /home
        const formdata = new FormData(form.current);
		const data = {
			username:formdata.get("email"), //con el name="email" de la línea 24, formdata.get es nativo de js
			password:formdata.get("password")  //con el name="password" de la línea 25
		}
		console.log(data)//por ahora no se manda al backend y lo imprimismos por consola
	}
    return (
            <div className="login">
                <div className="Login-container">
                    <img src={logo_yard} alt="logo" className="logo" />
                    <form action="/" className="form" ref={form}> {/*el ref hace referencia al form de la linea 9*/}
                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" placeholder="*********" className="input input-password" />
                        <button onClick={handleSubmit} className="primary-button login-button"> Log in </button> {/*al hacer click en el botón, acciona la funcion de la línea 10*/}
                        <a href="/">Forgot my password</a>
                    </form>
                    <button className="secondary-button signup-button"> Sign up </button>
                </div>
            </div >
            /* <div className="Menu">
                <Menu /> 
            </div>*/
        );
    }
    
    export default Login;        


