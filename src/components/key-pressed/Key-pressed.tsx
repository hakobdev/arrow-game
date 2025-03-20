import { ARROWS_MAP } from "../../constants/constants";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setEnteredValue } from "../../store/slices/playgroundSlice";
import { useKeyPressedElement } from "./hooks";
import styles from "./Key-pressed.module.css";
import React, { useEffect, useCallback } from "react";

const KeyPressed: React.FC<{ isTimerActive: boolean }> = ({
  isTimerActive,
}) => {
  const dispatch = useAppDispatch();
  const keyPressedElement = useKeyPressedElement();

  const keyDownEventListener = useCallback(
    (evt: KeyboardEvent) => {
      if (ARROWS_MAP.hasOwnProperty(evt.key)) {
        dispatch(setEnteredValue(evt.key));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (isTimerActive) {
      window.addEventListener("keydown", keyDownEventListener);
    } else {
      window.removeEventListener("keydown", keyDownEventListener);
    }

    return () => {
      window.removeEventListener("keydown", keyDownEventListener);
    };
  }, [isTimerActive, keyDownEventListener]);
  return <div className={styles.timer}>{keyPressedElement}</div>;
};

export default KeyPressed;
