import React from 'react';
import styles from './CartModall.module.scss';

import Protal from '../Potal/Potal';

const Backdrop = ({ onClose }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children, onClose }) => {
  return (
    <>
      <Protal destId="backdrop-root">
        <Backdrop onClose={onClose} />
      </Protal>
      <Protal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Protal>
    </>
  );
};

export default CartModal;
