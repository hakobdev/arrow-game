import { createSlice } from "@reduxjs/toolkit";
import { PlaygroundStateInterface } from "../type/playgroundSlice.type";
import { ARROWS_MAP_ARRAY } from "../../constants/constants";

const initialState: PlaygroundStateInterface = {
  currentStep: 0,
  steps: [],
  countSuccess: 0,
  countUnSuccess: 0,
};

const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * 4);
      state.steps.push({
        step: state.currentStep,
        currentValue: ARROWS_MAP_ARRAY[randomKeys],
        enteredValue: null,
        success: null,
      });
    },
    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];
        const isSuccess =
          state.steps[state.currentStep - 1].currentValue === action.payload;

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...state.steps[state.currentStep - 1],
            enteredValue: action.payload,
            success: isSuccess,
          };
        }

        if (isSuccess) {
          state.countSuccess += 1;
        } else {
          state.countUnSuccess += 1;
          state.countSuccess = 0;
        }
      }
    },
    unSuccess: (state) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];
        if (step.enteredValue === null) {
          state.countUnSuccess += 1;
          state.countSuccess = 0;
          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          };
        }
      }
    },
    resetStore: () => initialState,
  },
});

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  unSuccess,
  resetStore,
} = playgroundSlice.actions;

export default playgroundSlice.reducer;
