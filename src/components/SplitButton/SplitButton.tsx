import React, { useMemo, useRef } from 'react';
import { SplitButtonProps } from '@/interfaces/splitButton/SplitButton.interfaces';
import style from './SplitButton.module.scss';

const SplitButton: React.FC<SplitButtonProps> = React.memo(
	({ styles, items }) => {
		const {
			backgroundColor,
			borderColor,
			textColor,
			radius,
			hoverShadow,
			font,
			descriptionFont,
		} = styles;

		const cssVariables = useMemo(() => {
			return {
				'--font': font,
				'--description-font': descriptionFont,
				'--background-color': backgroundColor,
				'--border-color': borderColor,
				'--text-color': textColor,
				'--radius': radius || '6px',
				'--hover-shadow':
					hoverShadow || '5px 5px 25px -5px rgba(35, 60, 80, 0.3) inset',
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
							<li key={item.title} className={style['popup-item']}>
								<button onClick={handleCloseDetailsClick}>
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

export { SplitButton };
