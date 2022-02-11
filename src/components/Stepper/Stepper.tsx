import React, { FC, useMemo } from 'react';
import {
	StepperProps,
	STEPPER_VARIANT,
} from '@/interfaces/stepper/Stepper.interfaces';
import style from './Stepper.module.css';

const Stepper: FC<StepperProps> = ({ steps, options, styles = {} }) => {
	const { completedSteps, variant = STEPPER_VARIANT.FULL } = options;
	const {
		circleSize = '3rem',
		circleColor = 'pink',
		lineColor = 'PaleVioletRed',
	} = styles;

	const cssVariables = useMemo(() => {
		return {
			'--circle-size': circleSize,
			'--circle-color': circleColor,
			'--spacing': 'clamp(0.25rem, 2vw, 0.5rem)',
		};
	}, []) as React.CSSProperties;

	function getLineColor(i: number) {
		if (completedSteps.includes(i)) {
			return { '--line-color': lineColor } as React.CSSProperties;
		} else return { '--line-color': 'lightgrey' } as React.CSSProperties;
	}

	return (
		<ol className={style.stepper} style={cssVariables}>
			{steps.map((step, index) => (
				<li
					className={
						variant === STEPPER_VARIANT.FULL ? style.item : style.itemMinified
					}
					key={step.title}
					style={getLineColor(index)}
				>
					<h4
						className={style.circle}
						style={{
							opacity: completedSteps.includes(index) ? 1 : 0.5,
						}}
					>
						{index + 1}
					</h4>
					<h3 className={style.title}>{step.title}</h3>
					{variant === STEPPER_VARIANT.FULL ? (
						<p className={style.desc}>{step.description}</p>
					) : null}
				</li>
			))}
		</ol>
	);
};

export { Stepper };
