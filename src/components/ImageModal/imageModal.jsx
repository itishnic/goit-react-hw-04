import Modal from "react-modal";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, picture }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
    >
      {picture && (
        <div className={css.modalContent}>
          <img
            src={picture.urls.regular}
            alt={picture.alt_description}
            className={css.image}
          />
        </div>
      )}
    </Modal>
  );
};



export default ImageModal;
