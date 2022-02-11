import { FC, JSXElementConstructor, ReactElement } from 'react';

export interface SplitButtonProps {
	items: SplitButtonItems[];
	styles: {
		backgroundColor: string;
		borderColor: string;
		textColor: string;
		radius?: string;
		hoverShadow?: string;
	};
}

export interface SplitButtonItems {
	title: string;
	description?: string;
	icon: ReactElement;
}
