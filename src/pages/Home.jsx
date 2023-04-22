import React from 'react';
import Header from '@components/Header';
import ProductItem from '@components/ProductItem';
import ProductList from '@containers/ProductList';
import Footer from '@components/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <ProductList /> {/*Se definió al ProducItem como un organismo, esto permitió ser reproducible más facilmente*/}
            <Footer />
        </div>
    );
}
export default Home;