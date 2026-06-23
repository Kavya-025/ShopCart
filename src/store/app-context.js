import { createContext } from "react";

const Appcontext = createContext({
        showcart : false,
        showAddProd : false,
        products : [],
        Cartitems : [],
        opencart : () => {},
        closecart: () => {},
        openAddProd: () => {},
        closeAddProd: () => {},
        HandleAddProduct: () => {},
        HandleAddToCart: () => {},
        HandleDecreaseQuantity: () => {},
        HandleIncreaseQuantity: () => {},
        Loading: false,
    });

export default Appcontext;