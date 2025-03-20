import styles from "./Control-side.module.css";
import { IonIcon } from "@ionic/react";
import { play, pause } from "ionicons/icons";
import React from "react";

interface PropsControl {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlSide: React.FC<PropsControl> = (props) => {
  const { isTimerActive, setIsTimerActive } = props;

  const onPlayBtnHandler = () => {
    setIsTimerActive(true);
  };

  const onPauseBtnHandler = () => {
    setIsTimerActive(false);
  };

  return (
    <div className={styles.playground__div1}>
      <div className={styles.description__title}>
        <p>Arrow Game Description</p>
        <h1> ⬅️ ➡️ ⬆️ ⬇️</h1>
      </div>
      <p className={styles.paragraph}>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </p>
      <p className={styles.paragraph}>
        After three consecutive successful hits - game won, after three errors -
        lost.
      </p>
      <div className={styles.btns}>
        <button
          onClick={onPlayBtnHandler}
          disabled={isTimerActive}
          className={isTimerActive ? styles.active : ""}
        >
          PLAY <IonIcon icon={play} />
        </button>
        <button
          onClick={onPauseBtnHandler}
          disabled={!isTimerActive}
          className={isTimerActive ? "" : styles.active}
        >
          PAUSE <IonIcon icon={pause} />
        </button>
      </div>
    </div>
  );
};

export default ControlSide;
