import { useContext } from "react";
import Modal from "../UI/modal";
import "./Cart.css"
import Appcontext from "../store/app-context";

function CartItem({id, name, image, quantity}){
    const {HandleIncreaseQuantity,HandleDecreaseQuantity} = useContext(Appcontext);
    return (
    <div className="cart-item"> 
        <div className="item-image">
            <img src={require(`../assets/${image}`)} alt={name} className="product-img" />
            </div> 
            <div className="item-info"> 
                <div className="item-name"> {name}</div>
                <div className="item-qty"> Qty: {quantity} </div>
                <div>
                <button className="yellow-button qty-button qty-plus-button" 
                onClick={() => HandleIncreaseQuantity(id)}>
                    + </button>
                </div>
                <div>
                <button className="yellow-button qty-button qty-plus-button" 
                onClick={() => HandleDecreaseQuantity(id)}>
                    - </button>
                </div>
            </div>
        </div>
    )
}

function Cart(){
    const {showcart,closecart,Cartitems} = useContext(Appcontext)

    return (
        <Modal show = {showcart} onclose = {closecart}> 
        <div className="cart-container">
            <div className="cart-heading"> Cart </div>
            { (Cartitems.length > 0) ? Cartitems.map((item) => <CartItem 
            key={item.id}
            id = {item.id}
            name=  {item.name}
            image = {item.image}
            quantity = {item.quantity}
            /> ) : <div className="empty-cart"> cart is empty </div>}
            <div className="cart-buttons">
                <button className="black-button close cart" onClick={closecart}>
                     Close</button>
                {Cartitems.length > 0 && <button className="yellow-button" onClick={closecart}>
                    Checkout
                    </button>}
            </div>
        </div>
        </Modal>
    );
}

export default Cart;