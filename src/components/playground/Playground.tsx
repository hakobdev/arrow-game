import React, { useEffect, useRef, useState } from "react";
import styles from "./Playground.module.css";
import ControlSide from "../control-side/Control-side";
import ViewSide from "../view-side/View-side";
import { END_GAME_COUNT, INTERVAL_TIME } from "../../constants/constants";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  setCurrentStep,
  setSteps,
  unSuccess,
} from "../../store/slices/playgroundSlice";
import Modal from "../modal/Modal";

const Playground: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.playgroundReducer);

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(unSuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout);
    };
  }, [isTimerActive, dispatch]);

  useEffect(() => {
    const gameSucces = state.countSuccess === END_GAME_COUNT.SUCCESS_COUNT;
    const gameUnSucces =
      state.countUnSuccess === END_GAME_COUNT.UNSUCCESS_COUNT;

    gameSucces && setIsSuccessEndGame(true);
    gameUnSucces && setIsSuccessEndGame(false);

    if (gameSucces || gameUnSucces) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.countSuccess, state.countUnSuccess]);

  return (
    <div className={styles.playground__div}>
      <ViewSide state={state} isTimerActive={isTimerActive} />
      <ControlSide
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  );
};

export default Playground;
