import React, { useMemo, useRef } from 'react';
import { SplitButtonProps } from '@/interfaces/splitButton/SplitButton.interfaces';
import style from './SplitButton.module.scss';

const SplitButton: React.FC<SplitButtonProps> = React.memo(
	({ styles, items }) => {
		const {
			backgroundColor,
			borderColor,
			textColor,
			font,
			descriptionFont,
			shadowSize = '4px',
		} = styles;

		const cssVariables = useMemo(() => {
			return {
				'--font': font,
				'--description-font': descriptionFont,
				'--background-color': backgroundColor,
				'--border-color': borderColor,
				'--text-color': textColor,
				'--shadow-size': shadowSize,
			};
		}, []) as React.CSSProperties;

		const detailsRef = useRef<HTMLDetailsElement | null>(null);

		function handleCloseDetailsClick() {
			if (detailsRef.current) {
				detailsRef.current.open = false;
			}
		}

		return (
			<div className={style['split-button']} style={cssVariables}>
				<button className={style['main-button']}>View Cart</button>
				<details ref={detailsRef} className={style['details']}>
					<summary className={style['summary']}></summary>

					<ul className={style['popup']}>
						{items.map((item) => (
							<li
								key={item.title}
								className={style['popup-item']}
								onClick={handleCloseDetailsClick}
							>
								<button>
									{item.icon}
									{item.title}
								</button>
								{item.description && (
									<span className={style['description']}>
										{item.description}
									</span>
								)}
							</li>
						))}
					</ul>
				</details>
			</div>
		);
	}
);

export default SplitButton;
