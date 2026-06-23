import React, {useEffect, useState} from 'react'
import Appcontext from './app-context'
import InitialProducts from "./../data/products.json"


const AppContextProvider = ({children}) => {
    
    const [showcart, setshowcart] = useState(false);
    const [showAddProd, setshowAddprod] = useState(false);

    const [Loading, setLoading] = useState(false);

    const [Cartitems, setCartitems] = useState([]);
    const [products, setProducts] = useState({});

    const opencart = () => setshowcart(true);
    const closecart = () => setshowcart(false);

    const openAddProd = () => setshowAddprod(true);
    const closeAddProd = () => setshowAddprod(false);

    const HandleAddToCart = (productid , productname, productimage) => {

      const ProductInCartIndex = Cartitems.findIndex(
        (item) => item.id === productid
      );

      if(ProductInCartIndex === -1){
        const CartItem = {
            id: productid,
            name: productname,
            image: productimage,
            quantity: 1
          };
        setCartitems((state) => [...state, CartItem]);
      }else{
        const updatedCartItems = [...Cartitems];
        updatedCartItems[ProductInCartIndex].quantity += 1;
        setCartitems(updatedCartItems);
      }

    };

    const HandleIncreaseQuantity = (productid) => {
      
      const ProductInCartIndex = Cartitems.findIndex(
        (item) => item.id === productid
      );
      const updatedCartItems = [...Cartitems];
      updatedCartItems[ProductInCartIndex].quantity += 1;
      setCartitems(updatedCartItems);
    }


    const HandleDecreaseQuantity = (productid) => {
      const ProductInCartIndex = Cartitems.findIndex(
        (item) => item.id === productid
      );
      const qty = Cartitems[ProductInCartIndex].quantity;
      let updatedCartItems = [...Cartitems];
      if(qty === 1){
        updatedCartItems = updatedCartItems.filter(
          (items) => items.id !== productid
        );
      }
      else{
        updatedCartItems[ProductInCartIndex].quantity -= 1;
      }
      setCartitems(updatedCartItems);
      
    }

    const HandleAddProduct = (ProductName) => {
      const product = {
        id : Object.keys(products).length + 1,
        name : ProductName,
        image : "default.png"  
      };
      Sendproductdata(product)
      setProducts((state) => {
        return {...state,[Object.keys(state).length+1]: product};
      });
      setshowAddprod(false);
    };

const Sendproductdata = async (product) => {
  const response = await fetch ("https://react-store-33ddb-default-rtdb.firebaseio.com/products.json",{
    method: "POST",
    headers : {
      "Content-Type": "application/json"  
    },
    body: JSON.stringify(product),
  }
  );
  const data = await response.json();
  console.log(data);  
}

useEffect(() => {
    const FetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://react-store-33ddb-default-rtdb.firebaseio.com/products.json"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    FetchProduct();
}, []);

    const AppContextvalue =  {
        showcart,
        showAddProd,
        products,
        Cartitems,
        opencart,
        closecart,
        Loading,
        openAddProd,
        closeAddProd,
        HandleAddProduct,
        HandleAddToCart,
        HandleDecreaseQuantity,
        HandleIncreaseQuantity,
    };

  return (
    <Appcontext.Provider value = {AppContextvalue}>
        {children}
    </Appcontext.Provider>
  )
}

export default AppContextProvider;  