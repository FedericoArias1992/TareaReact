import React from 'react';
import '@components/styles/ProductItem.scss';
import agregarCarrito from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

//Vamos a aplicar el concepto de Hooks y cambios de estado:
import { useState, useContext } from 'react'; //para usar los hooks
import addedToCartIcon from '@icons/bt_added_to_cart.svg'
import ProductInfo from '@components/ProductInfo';

const ProductItem = ({ product }) => { //recibimos como argumento CADA producto devuelto por la API llamada en ProductList
	//Acá metemos la lógica para usar los hooks:
	//const [cart, setCart] = useState([]); //definimos la variable (cart) y la funcion cambiadora de estado (setCart)
	const { addToCart, isInCart} = useContext(AppContext);

	const handleClick = item => { //la hacer click en el producto, lo agregamos al carrito
		addToCart(item);
	}
	//const handleClick = () => { //esta funcion la definimos por convencion se llama handleclick cuando solo existe un elemento que cambie de 1 estado a un solo un estado b
	//	setCart('Hiciste Click en el carrito!!');}	->Era un ejemplo, la manera apropiada para la app está arriba 

	//let x=product;
	//console.log(x);
	const [showProductInfo, setShowProductInfo] = useState(false);//para mostrar el product info cuando se clickea la foto
	const handleProductClick = () => {
		setShowProductInfo(true);
	  };
	
	  const handleProductClose = () => {
		setShowProductInfo(false);
	  };

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} onClick={handleProductClick} />
			{ showProductInfo && <ProductInfo product={product} key={product.id} onClose={handleProductClose} />}
			<div className="product-info">
				<div>
					<p>{product.price}Bs.</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}> {/*funcion anonima que trae a handleClick que transmite el producto */}		
					{/*	(nombre de la variable product viene de la API) al context y asi al App.jsx*/}
					{isInCart(product.id) 	/*Tenemos una funcion desde useInitialState que se fija si el item ya fue agregado o no al carrito*/
           			 ? <img src={addedToCartIcon} alt="Add another to cart" /> /*si YA fue agregado, ponemos esta imagen*/
            		 : <img src={agregarCarrito} alt="Add to cart" /> 		/*si NO fue agregado, ponemos esta otra*/
          }
				</figure>
				{/*cart*/} {/*aca llamamos para que lo muestre dentro del div class=product-info y a la derecha de figure*/} 
			</div>		{/*si lo ponemos antes del figure, lo muestra a la izquierda del figure, y asi sucesivamente*/} 
		</div>
	);
}

export default ProductItem;