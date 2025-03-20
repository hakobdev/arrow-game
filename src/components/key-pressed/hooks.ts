import { ARROWS_MAP, ARROWS_MAP_INTERFACE } from "../../constants/constants";
import { useAppSelector } from "../../store/hooks/hooks";

export const useKeyPressedElement = () => {
  const state = useAppSelector((state) => state.playgroundReducer);

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue;
    if (enteredValue) {
      return ARROWS_MAP[enteredValue as keyof ARROWS_MAP_INTERFACE];
    }
  }

  return "⏳";
};
