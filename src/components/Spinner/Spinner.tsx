import { SpinnerProps } from '@/interfaces/spinner/Spinner.interfaces';
import React, { useMemo } from 'react';
import style from './Spinner.module.scss';

const Spinner: React.FC<SpinnerProps> = ({ styles = {} }) => {
	const { size = '12px', color = '#ed5e42' } = styles;

	const cssVariables = useMemo(() => {
		return {
			'--size': size,
			'--color': color,
		};
	}, []) as React.CSSProperties;

	return <div className={style['spinner']} style={cssVariables}></div>;
};

export default Spinner;
