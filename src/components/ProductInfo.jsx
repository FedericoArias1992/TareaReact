import React from 'react';
import '@styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

//pasamos el context para poder mostrar la info del producto en grande y encima de la pantalla al clickearlo


const ProductInfo = ({product}) => {

	return (
		<div className="OrderItem">
			<img src={icon_close} alt="close" className='close_icon'/>
			<p>{product.title}</p>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.price}Bs.</p>
			<p>{product.description}</p>
		</div>
	);
}

export default ProductInfo;