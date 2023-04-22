import React from 'react';
import '@styles/Header.scss';

import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';

//Vamos a trabajar para hacer el toggle:
import { useState } from 'react';//importamos la libreria 
import Menu from '@components/Menu'; //si queremos mostrar otro elemento, debemos impotarlo y agregarlo al HTML

//para el hook que hace que aparezca el numero de productos nel carrito
import AppContext from '../context/AppContext';
import {useContext} from 'react';

//Vamos a mostrar el checkOut:
import MyOrder from '../containers/MyOrder'; 

const Header = () => {
    const [toggle,setToggle] =useState(false); /*Definimos que el menu no se muestre por defecto (false) hasta que se clickee*/;
    
    const handleToggle = () => {
        setToggle(!toggle); /*ponemos el ! para que cambie el valor de toggle a su inversa: de False a True y True a False con cada click en el elemento*/
                           /*Idenificamos el elemento el cual hará que al click se muestre el menu: navbar-email*/
        }
    const { state } = useContext(AppContext);  //necesitamos el estado de context para revisar lo que esta dentro	
        //ahora vamos a hacer la validacion, si AppContext tiene algun elemento, entonces voy a mostrar la cantidad en el carrito
    const [toggleOrders,setToggleOrders] = useState(false);

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src= {shopping_cart} alt="shopping cart" onClick={()=>setToggleOrders(!toggleOrders)} /> {/*la hacemos funcion anónima pq sino se ejecuta cada instante y hace loop infinito*/}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}	{/*si el largo de cart es mayor a cero, entonces muestro el*/}
                    </li>           {/*largo del vector cart (cart es vector de objetos items productos, caso contrario muestro nulo*/}
                </ul>               {/*Algo wichtig: el div lo pusimos asi tal que cuando cart es nulo, no aparezca el circulito vacio, segun css el estilo del circulo verde este para ese div, dentro de li*/}
            </div>                              
                {toggle && <Menu />} {/*Solo muestra el menu si toggle es verdadero y lo muestra fuera del div pero dentro del nav */}
                                     {/*ver el archivo de la clase 11 para mas acerca del &&*/}
                {toggleOrders && <MyOrder />} {/*para desplegar el checkout con el click*/}
        </nav>   
    );
}

export default Header;
