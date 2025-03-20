import React from "react";
import styles from "./Modal.module.css";
import { useAppDispatch } from "../../store/hooks/hooks";
import { resetStore } from "../../store/slices/playgroundSlice";

interface PropsControl {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessEndGame: boolean;
}

const Modal: React.FC<PropsControl> = ({
  setIsShowModal,
  isSuccessEndGame,
}) => {
  const dispatch = useAppDispatch();
  const startNewGame = () => {
    setIsShowModal(false);
    dispatch(resetStore());
  };

  return (
    <div className={styles.modal__div}>
      <div
        className={`${styles.info_window_div} ${
          isSuccessEndGame ? styles.isSuccess : styles.isUnSuccess
        }`}
      >
        <h1>{isSuccessEndGame ? "YOU WONNN !!!" : "YOU LOSEEEE ((("}</h1>
        <button onClick={startNewGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default Modal;
