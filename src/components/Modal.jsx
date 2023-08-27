import {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = (prop) => {
    let {onClose} = prop
    return (
        <div className={'fixed top-0 left-0 w-full h-screen z-20 bg-[#000000bf]'} onClick={onClose}></div>
    )
}

const ModalOverlay = (prop) => {
    return (
        <div className={'fixed left-0 right-0 my-[10%] mx-auto w-3/5 bg-white p-4 rounded-2xl shadow-modal z-30 animate-slideDown'}>
            <div className={''}>{prop.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (prop) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={prop.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{prop.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
};
export default Modal
