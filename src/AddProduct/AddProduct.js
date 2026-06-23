import { useContext, useState } from "react";
import Modal from "../UI/modal"
import "./AddProduct.css"
import Appcontext from "../store/app-context";

function AddProduct() {
    const {showAddProd, closeAddProd,HandleAddProduct } = useContext(Appcontext);
    const [productName, setProductName] = useState("");

    function HandleSubmit(event){
        event.preventDefault();
        HandleAddProduct(productName);

        
    };
    const HandleProductNameChange = (event) => {
            const enteredName = event.target.value;
            setProductName(enteredName);
        }

    return (<Modal show = { showAddProd } onclose = {closeAddProd}>
        <div className="add-product-container">
            <div className="add-product-heading"> Add Product</div>
            <form onSubmit= {HandleSubmit}  className="add-product-form">
                <div className="form-label"> Enter Product name</div>
                {/* <input className= "form-input" name = "product-name" ref={nameRef}/> */}
                <input className="product_name" value={productName} 
                onChange={HandleProductNameChange}
                />
                <button className="yellow-button submit-button" 
                type="submit"> Add Product </button>
            </form>
        </div>
    </Modal>)
}

export default AddProduct