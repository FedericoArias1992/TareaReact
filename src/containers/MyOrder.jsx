import React from 'react';
import OrderItem from '../components/OrderItem';
import '@styles/MyOrder.scss';
import flechaImg from '@icons/flechita.svg';

//vamos a usar useContext para pasar los items agregados al carrito a este componente
//del checkout
import {useContext} from 'react';
import AppContext from '../context/AppContext';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0); //el cero es para asignar el valor inicial de la funcion sumTotal
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
				<img src={flechaImg} alt="arrow" />
			</div>
			<div className="my-order-content"> {/*abajo pasamos los items agregados al carrito a la seccion actual del menu de checkOut */}
				{state.cart.map(product=> (<OrderItem product={product} key={`orderItem-${product.id}`} />))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;