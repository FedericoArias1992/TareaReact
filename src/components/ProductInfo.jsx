import React from 'react';
import '@styles/ProductInfo.scss';
import '@styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

const ProductInfo = ({product, onClose}) => {

  const handleProductClose = () => {
    onClose();
  };

  return (
    <div className="ProductInfo">
      <img src={icon_close} alt="close" className='close_icon' onClick={handleProductClose} />
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
