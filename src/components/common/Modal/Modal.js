import { createPortal } from "react-dom";

import { ReactComponent as CloseBtn } from "assets/images/closeBtn.svg";
import styles from "./Modal.module.scss";

function Modal({ children, onClose }) {
  const dialog = (
    <div className={styles.overlay}>
      <dialog className={styles.modal} open={true}>
        {children}
        <CloseBtn className={styles.closeBtn} onClick={onClose} />
      </dialog>
    </div>
  );
  const container = document.getElementById("dialogContainer");

  return createPortal(dialog, container);
}

export default Modal;
