import React from 'react';
import ProductItem from '@components/ProductItem';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductList.scss';

//En verde: Ejemplo de uso de useEffect para mostrar los productps desde una API
const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=2';
//import { useEffect, useState } from 'react';
//import axios from 'axios';
import '../hooks/useGetProducts';
import useGetProducts from '../hooks/useGetProducts';
const ProductList = () => {
	const products = useGetProducts(API); //llamamos al custom hook
/*	const [products, setProducts] = useState([]);
	useEffect(() => {       //la funcion, y un segundo argumento, el cual sera un arreglo para "escuchar" eventos o cambios
        const getProducts = async () => {
            const response = await axios(API);
            setProducts(response.data);
		};
        getProducts();
	}, []);
*/
	return (
		<section className="main-container">
			<div className="ProductList"> {/*Vamos iterar por cada uno de los productos que traiga la API*/}
				{products.map(product=>(	//products y hacer el render del ProductItem - Tener en cuenta que el productList es el contenedor
				<ProductItem product={product} key={product.id} />		//de los varios productItem
			))}
			</div>
		</section>
	);
}

export default ProductList;