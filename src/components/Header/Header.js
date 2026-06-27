import "./Header.css"
import Appcontext from "../../store/app-context";
import { useContext } from "react";

function Header(){
    const {opencart, openAddProd} = useContext(Appcontext);

    return (<div className="header">
        <h1>ShopCart</h1>
        <div>
            <button className="yellow-button" style={{marginRight: "20px"}}
                onClick={openAddProd}> Add Product
            </button>
            <button className="yellow-button" onClick ={opencart}>cart</button>
        </div>
    </div>);
}

export default Header;