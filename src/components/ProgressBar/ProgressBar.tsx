import React, { useMemo } from 'react';
import { ProgressBarProps } from '@/interfaces/progressBar/PropgressBar.interfaces';
import style from './ProgressBar.module.scss';

const ProgressBar: React.FC<ProgressBarProps> = ({ styles = {} }) => {
	const {
		color = '#24ad37',
		backgroundColor = 'rgba(0, 0, 0, 0.1)',
		width = '20%',
		speed = '3s',
	} = styles;

	const cssVariables = useMemo(() => {
		return {
			'--color': color,
			'--background-color': backgroundColor,
			'--width': width,
			'--speed': speed,
		};
	}, []) as React.CSSProperties;

	return (
		<div className={style['animation-bar-1']} style={cssVariables}>
			<span></span>
		</div>
	);
};

export default ProgressBar;
