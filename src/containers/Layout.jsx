import React from "react";

const Layout = ({children}) => {
	return (
        <div className="Layout">
            {children}
        </div>
    );

}

export default Layout;

//se usa para que al crearse una pagina en la ruta, se lo despliegue como hijo de Layout