import React from "react";
import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-btn">
        <i className="fas fa-times"></i>
      </button>
      <img src={imageUrl} alt="Popup" className="modal-image" />
    </Modal>
  );
};

export default ImageModal;
