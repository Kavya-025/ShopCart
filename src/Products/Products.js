import { useContext } from "react";
import "./Products.css"
import Appcontext from "../store/app-context";

function Product({id,name,image, onAddToCart}){
    const {HandleAddToCart} = useContext(Appcontext);
    return(
            <div key={id} className="product">
                <img src={require(`../assets/${image}`)} alt={name} className="product-img" />
                <div className="product-name">{name}</div>
                <button className="product-button" onClick={ () => HandleAddToCart(id,name,image)}>Add to cart</button>
            </div>
    );

}

function Products(){
    const {products, Loading} = useContext(Appcontext);
    if(Loading){
        return <p>Loading...</p>
    }
    return (
        <div className="products-container">    
            {Object.keys(products).map((k) => (
                <Product 
                key={k} 
                id={products[k].id} 
                name={products[k].name} 
                image = {products[k].image}
                />
            ))}
        </div>
    );
}

export default Products;