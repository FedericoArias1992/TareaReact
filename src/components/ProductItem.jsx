import React from 'react';
import '@components/styles/ProductItem.scss';
import agregarCarrito from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

//Vamos a aplicar el concepto de Hooks y cambios de estado:
import { useState, useContext } from 'react'; //para usar los hooks

const ProductItem = ({ product }) => { //recibimos como argumento CADA producto devuelto por la API llamada en ProductList
	//Acá metemos la lógica para usar los hooks:
	//const [cart, setCart] = useState([]); //definimos la variable (cart) y la funcion cambiadora de estado (setCart)
	const { addToCart } = useContext(AppContext);

	const handleClick = item => { //la hacer click en el producto, lo agregamos al carrito
		addToCart(item);
	}
	//const handleClick = () => { //esta funcion la definimos por convencion se llama handleclick cuando solo existe un elemento que cambie de 1 estado a un solo un estado b
	//	setCart('Hiciste Click en el carrito!!');}	->Era un ejemplo, la manera apropiada para la app está arriba 

	//let x=product;
	//console.log(x);
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price}Bs.</p>
					<p>{product.title}</p>
					<p>{product.description}</p>
				</div>
				<figure onClick={() => handleClick(product)}> {/*funcion anonima que trae a handleClick que transmite el producto */}		
					<img src={agregarCarrito} alt="" />			{/*(nombre de la variable product viene de la API) al context y asi al App.jsx*/}
				</figure>
				{/*cart*/} {/*aca llamamos para que lo muestre dentro del div class=product-info y a la derecha de figure*/} 
			</div>		{/*si lo ponemos antes del figure, lo muestra a la izquierda del figure, y asi sucesivamente*/} 
		</div>
	);
}

export default ProductItem;