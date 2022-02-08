export interface StepperProps {
  steps: Step[];
  options: {
    completedSteps: number[],
    variant?: STEPPER_VARIANT.FULL | STEPPER_VARIANT.MINIFIED,
  },
  styles?: {
    circleColor?: string,
    circleSize?: string,
    lineColor?: string,
  }
}

export interface Step {
  title: string;
  description: string;
}

export enum STEPPER_VARIANT {
  FULL = 'full',
  MINIFIED = 'minified',
}

