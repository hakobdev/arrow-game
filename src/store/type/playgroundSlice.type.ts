export interface PlaygroundStateStepsInterface {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
}

export interface PlaygroundStateInterface {
  currentStep: number;
  steps: PlaygroundStateStepsInterface[];
  countSuccess: number;
  countUnSuccess: number;
}
