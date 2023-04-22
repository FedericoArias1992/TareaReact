import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
	useEffect(() => {       //la funcion, y un segundo argumento, el cual sera un arreglo para "escuchar" eventos o cambios
        const getProducts = async () => {
            const response = await axios(API);
            setProducts(response.data);
		};
        getProducts();
	}, []);
    return products;
};

export default useGetProducts;