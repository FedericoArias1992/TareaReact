import {useState} from 'react';

const initialState = { //creamos el objeto que populamos con la info necesaria (el carrito)
	cart:[], //lo inicializamos vacio
	//info_persona:[], por ejemplo aca pueden venir más datos que caractericen el estado
}

const useInitialState = () => {	//creamos el estado y la inicializamos como el estado initialState con cart vacio
	const [state, setState] = useState(initialState);
	
	const addToCart = (payload) =>{//creamos la funcion que nos permitirá agregar items al carrito, recibe un objeto "product" - la variable por defecto se llama payload, pero es producto en este caso
		setState({
			...state, //denota que mantenga lo que está en el estado (como guardado previamente)
			cart : [
                ...state.cart,
                {...payload, idCart:state.cart.length+1},
            ]						//que mantenga lo que habia en cart y agregue el product y 
									//creamos un idCart para poder asginar un id único a ese producto, ya que product.id 
									//no es único si el item se selecciona a comprar varias veces							
		})
	} 
	const removeFromCart = (payload) => {
		//la idea es crear la funcion que borre el item con id del array de items en el carro
		//que coincida con el product.id que se clickea a borrar
		setState({
			...state, //lo que tengo en el estado lo dejo
			cart:state.cart.filter((product)=>product.idCart!==payload.idCart) //sobre el carrito, quiero hacer un flitro que me permita encontrar el item y 
					//eliminarlo cruzandolo con el item que recibo del payload
		})
	}
	return {
		state,
		addToCart,
		removeFromCart //lo debemos importar en OrderItem.jsx pq ahí esta la cruz para borrar el item de la lista
	}	
}
export default useInitialState;