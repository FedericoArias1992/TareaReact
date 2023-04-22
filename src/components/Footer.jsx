import React from 'react';
import imagenLogo from '@logos/favicon_yard_sale.svg';
import '@styles/footer.scss';

const Footer = () => {
    return (
        <div className='piepagina'>
            <footer>
                <div className='datos-personales'>
                    <p>Author: Federico Arias</p>
                    <p>Contact: <a href="mailto:f_ariassuarez@hotmail.com">f_ariassuarez@hotmail.com</a></p>
                </div>
            </footer>
            <img src={imagenLogo} alt={imagenLogo} />
        </div>    
    );
}
export default Footer;