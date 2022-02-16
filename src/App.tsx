import { Stepper } from '@/components/Stepper';
import { SplitButton } from '@/components/SplitButton';
import { SplitButtonItems } from '@/interfaces/splitButton/SplitButton.interfaces';
import { Spinner } from './components/Spinner';

const steps = [
	{
		title: 'First title',
		description: 'Some first description',
	},
	{
		title: 'Second item',
		description: 'New text do stuff',
	},
	{
		title: 'Third thing',
		description: 'Something to do',
	},
	{
		title: 'Last child',
		description: 'Blah blah blah',
	},
	{
		title: 'Wow',
		description: 'Is it work?',
	},
];

const cart = (
	<svg aria-hidden="true" viewBox="0 0 24 24" fill="hsl(220 75% 50%)">
		<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
	</svg>
);

const save = (
	<svg aria-hidden="true" viewBox="0 0 24 24" fill="hsl(220 75% 50%)">
		<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
	</svg>
);

const splitButtonItems: SplitButtonItems[] = [
	{
		title: 'Quick Pay',
		icon: cart,
		description: 'Some long explanation what this option do',
	},
	{
		title: 'Save for later',
		icon: save,
		description: 'another long useless text with some thoughts',
	},
];

function App() {
	return (
		<div>
			<Stepper steps={steps} options={{ completedSteps: [0, 1] }} />
			<SplitButton
				items={splitButtonItems}
				styles={{
					backgroundColor: 'hsl(220 75% 50%)',
					borderColor: 'hsl(220 50% 75%)',
					textColor: 'hsl(220 90% 98%)',
					font: '14px Helvetica bold',
					descriptionFont: '10px Helvetica bold',
				}}
			/>
			<Spinner />
		</div>
	);
}

export default App;
