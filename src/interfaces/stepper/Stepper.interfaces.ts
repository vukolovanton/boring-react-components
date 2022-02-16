export interface StepperProps {
	steps: Step[];
	options: {
		completedSteps: number[];
		variant?: STEPPER_VARIANT.FULL | STEPPER_VARIANT.MINIFIED;
		square?: boolean;
	};
	styles?: {
		circleColor?: string;
		circleSize?: string;
		lineColor?: string;
		shadowSize?: string;
	};
}

export interface Step {
	title: string;
	description: string;
}

export enum STEPPER_VARIANT {
	FULL = 'full',
	MINIFIED = 'minified',
}
