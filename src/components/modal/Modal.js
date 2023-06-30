import ModalStyles from "./Modal.module.css";
import {X} from "react-feather";

const Modal = ({setShowModal, children}) => {
    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleContentClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={ModalStyles.background} onClick={handleModalClose}>
            <div className={ModalStyles.contentBox} onClick={handleContentClick}>
            <X className={ModalStyles.cancel} onClick={handleModalClose}/>
                {children}
            </div>
        </div>
    )
}

export {Modal}