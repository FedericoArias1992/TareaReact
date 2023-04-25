import React from 'react';
import {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
    const { state } = useContext(AppContext);
    return (
        <div className="mobile-menu"> 
        <ul>
            <li>
                <a href="">CATEGORIES</a>
            </li>
            <li>
                <a href="">All</a>
            </li>
            <li>
                <a href="">Clothes</a>
            </li>
            <li>
                <a href="">Electronics</a>
            </li>
            <li>
                <a href="">Furnitures</a>
            </li>
            <li>
                <a href="">Toys</a>
            </li>
            <li>
                <a href="">Other</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="">Mis pedidos</a>
            </li>
            <li>
                <a href="">Mi cuenta</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/" className="email">correo_ejemplo@gmail.com</a>
            </li>
            <li>
                <a href="/" className="cerrar-sesion">Cerrar Sesion</a>
            </li>
            </ul>
    </div>
	);
}

export default MenuMobile;