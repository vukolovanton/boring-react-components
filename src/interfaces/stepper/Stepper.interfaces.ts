export interface StepperProps {
  steps: Step[];
  options: {
    activeStepNumber: number,
  }
}

export interface Step {
  title: string;
  description: string;
}

