import "./modal.css" 
function Modal({show,onclose, children}){
    if(!show){
        return null;
    }
    return (<div className="backdrop" onClick={onclose}>
            <div className="modal" onClick = {(event) => event.stopPropagation()} >{children} </div>
        </div>
    );
}

export default Modal