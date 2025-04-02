// src/components/ImageModal.js
import React from 'react';
import { Modal, Image } from 'antd';

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  return (
    <Modal
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width="80%"
    >
      <Image src={imageUrl} alt="Imagem Expandida" width="100%" />
    </Modal>
  );
}
