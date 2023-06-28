import ModalStyles from "./Modal.module.css";

const Modal = ({children}) => {
    return (
        <div className={ModalStyles.background} >
            <div className={ModalStyles.contentBox}>
                {children}
            </div>
        </div>
    )
}

export {Modal}