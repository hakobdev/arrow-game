import styles from "./View-side.module.css";
import KeyPressed from "../key-pressed/Key-pressed";
import {
  PlaygroundStateInterface,
  PlaygroundStateStepsInterface,
} from "../../store/type/playgroundSlice.type";
import { ARROWS_MAP, ARROWS_MAP_INTERFACE } from "../../constants/constants";

const ViewSide: React.FC<{
  state: PlaygroundStateInterface;
  isTimerActive: boolean;
}> = ({ state, isTimerActive }) => {
  const getElementStyle = (element: PlaygroundStateStepsInterface) => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess;
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnSuccess;
    }
  };

  return (
    <div className={styles.playground__div1}>
      <h1 className={styles.title1}>Random Keys</h1>

      {state.steps.length === 0 ? (
        <>
          {isTimerActive ? (
            <div className={styles.loader}></div>
          ) : (
            <span className={styles.text__span}>
              Press "PLAY" to start the game and wait for the first arrow to
              apear
            </span>
          )}
        </>
      ) : (
        <div className={styles.arrow__div}>
          {state.steps.map((el) => {
            return (
              <div
                key={el.step}
                className={`${styles.arrow}  ${getElementStyle(el)}`}
              >
                {ARROWS_MAP[el.currentValue as keyof ARROWS_MAP_INTERFACE]}
              </div>
            );
          })}
        </div>
      )}

      <h2 className={styles.title2}>Key pressed</h2>
      <p className={styles.paragraph}>
        Press the key corresponding to the key in "Random Keys".
      </p>
      <KeyPressed isTimerActive={isTimerActive} />
      <h2 className={styles.title2}>Score</h2>
      <p className={styles.paragraph}>
        On Error, the "Consecutive successful hits" value is reset to zero.
      </p>
      <div className={styles.info__div}>
        <span className={styles.span__error}>
          Error: {state.countUnSuccess}
        </span>
        <span className={styles.span__success}>
          Successful: {state.countSuccess}
        </span>
      </div>
    </div>
  );
};
export default ViewSide;
