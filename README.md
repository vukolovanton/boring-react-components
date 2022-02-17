# useless-react-components
Bunch of useless visible-border style React UI components

## Stepper
Input props:
```js
interface StepperProps {
  // Array of steps to display
	steps: Step[];
	options: {
    // Array of numbers which represent indexes of steps.
		completedSteps: number[];
    // Varian of display
		variant?: STEPPER_VARIANT.FULL | STEPPER_VARIANT.MINIFIED;
	};
	styles?: {
    // Main color
		circleColor?: string;
    // Step circle size
		circleSize?: string;
    // Color of divider between steps
		lineColor?: string;
    // Length of shadow
		shadowSize?: string;
	};
}

interface Step {
  // Step title
	title: string;
  // Optional description
	description?: string;
}

enum STEPPER_VARIANT {
	FULL = 'full',
	MINIFIED = 'minified',
}
```

Usage example:
```jsx
const steps = [
	{
		title: 'First title',
	},
	{
		title: 'Second item',
		description: 'New text do stuff',
	},
	{
		title: 'Third thing',
		description: 'Something to do',
	},
];

<Stepper steps={steps} options={{ completedSteps: [0, 1] }} />
```

---

## Split Button
Input props:
```js
interface SplitButtonProps {
  // Items which are going to be available through dropdown submenu
	items: SplitButtonItems[];
	styles: {
    // Button background color
		backgroundColor: string;
    // Color of border between button and submenu
		borderColor: string;
    // Font color
		textColor: string;
    // Font settings
		font: string;
    // Description font settings
		descriptionFont?: string;
    // Shadow length
		shadowSize?: string;
	};
}
  
interface SplitButtonItems {
	title: string;
	description?: string;
	icon: ReactElement;
}
```

---

Usage example:
```jsx
const splitButtonItems: SplitButtonItems[] = [
	{
		title: 'Quick Pay',
		icon: cart,
		description: 'Some long explanation what this option do',
	},
	{
		title: 'Save for later',
		icon: save,
	},
];

<SplitButton
  items={splitButtonItems}
  styles={{
    backgroundColor: '#d97c1e',
    borderColor: 'black',
    textColor: 'black',
    font: '14px',
    descriptionFont: '10px',
  }}
/>
```

---

## Spinner
Input props:
```js
interface SpinnerProps {
	styles: {
    // Circle size
		size: string;
    // Circle color
		color: string;
	};
}
```

Usage example:
```jsx
<Spinner
  styles={{
    color: '#ed5e42',
    size: '12px',
  }}
/>
```

---

## Progress bar
Input props:
```js
interface ProgressBarProps {
	styles: {
    // Bar color
		color: string;
    // Background color for container
		backgroundColor: string;
    // Width of progress scale element
		width?: string;
    // Movement speed
		speed?: string;
	};
}
```

Usage example:
```js
<ProgressBar
  styles={{
    color: '#24ad37',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '20%',
    speed: '3s',
  }}
/>
```
