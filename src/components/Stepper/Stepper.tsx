import React, { FC, useMemo } from 'react';
import {
	StepperProps,
	STEPPER_VARIANT,
} from '@/interfaces/stepper/Stepper.interfaces';
import style from './Stepper.module.css';

const Stepper: FC<StepperProps> = ({ steps, options, styles = {} }) => {
	const {
		completedSteps,
		variant = STEPPER_VARIANT.FULL,
		square = false,
	} = options;
	const {
		circleSize = '3rem',
		circleColor = 'pink',
		lineColor = 'PaleVioletRed',
		shadowSize = '5px',
	} = styles;

	const cssVariables = useMemo(() => {
		return {
			'--circle-size': circleSize,
			'--circle-color': circleColor,
			'--spacing': 'clamp(0.25rem, 2vw, 0.5rem)',
			'--shadow-size': shadowSize,
			'--radius': square ? '0' : '50%',
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
						// Todo: make helper function
						style={{
							backgroundColor: completedSteps.includes(index)
								? circleColor
								: 'transparent',
							boxShadow: completedSteps.includes(index)
								? `${shadowSize} ${shadowSize} 0px 0px rgba(0, 0, 0, 0.75)`
								: 'none',
						}}
					>
						{index + 1}
					</h4>
					{/* Todo: adjust elements height */}
					<div
						className={style.descriptionBox}
						style={{
							backgroundColor: completedSteps.includes(index)
								? 'antiquewhite'
								: 'transparent',
							boxShadow: completedSteps.includes(index)
								? `${shadowSize} ${shadowSize} 0px 0px rgba(0, 0, 0, 0.75)`
								: 'none',
						}}
					>
						<h3
							className={style.title}
							style={{
								marginBottom:
									variant === STEPPER_VARIANT.FULL && step.description
										? '0.5rem'
										: '0',
								borderBottom:
									variant === STEPPER_VARIANT.FULL && step.description
										? `2px solid black`
										: 'none',
							}}
						>
							{step.title}
						</h3>
						{variant === STEPPER_VARIANT.FULL && step.description && (
							<p className={style.desc}>{step.description}</p>
						)}
					</div>
				</li>
			))}
		</ol>
	);
};

export { Stepper };
