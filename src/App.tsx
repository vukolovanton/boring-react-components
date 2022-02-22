import Stepper from '@/components/Stepper';
import SplitButton from '@/components/SplitButton';
import Spinner from '@/components/Spinner';
import ProgressBar from '@/components/ProgressBar';
import Toggle from '@/components/Toggle';
import { SplitButtonItems } from '@/interfaces/splitButton/SplitButton.interfaces';

const steps = [
	{
		title: 'First title',
		// description: 'Some first description',
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
		// description: 'Blah blah blah',
	},
	{
		title: 'Wow',
		// description: 'Is it work?',
	},
];

const cart = (
	<svg aria-hidden="true" viewBox="0 0 24 24" fill="black">
		<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
	</svg>
);

const save = (
	<svg aria-hidden="true" viewBox="0 0 24 24" fill="black">
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
			<Toggle />
		</div>
	);
}

export default App;
