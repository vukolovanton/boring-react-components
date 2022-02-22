import { ToggleProps } from '@/interfaces/toggle/Toggle.interfaces';
import React, { useMemo } from 'react';
import styles from './Toggle.module.scss';

const Toggle: React.FC<ToggleProps> = ({ style = {} }) => {
	const {
		checkedColor = '#248511',
		uncheckedColor = '#faebd7',
		backgroundBoxColor = '#edece8',
	} = style;
	const cssVariables = useMemo(() => {
		return {
			'--checked-color': checkedColor,
			'--unchecked-color': uncheckedColor,
			'--background-box-color': backgroundBoxColor,
		};
	}, []) as React.CSSProperties;

	return (
		<div className={styles['toggle-wrapper']} style={cssVariables}>
			<input type="checkbox" id="check" className={styles['toggle']} />
			<label htmlFor="check">Checked</label>
		</div>
	);
};

export default Toggle;
