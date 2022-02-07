import { Stepper } from './Stepper';

const steps = [
  {
    title: 'First title',
    description: 'Some first description'
  },
  {
    title: 'Second item',
    description: 'New text do stuff'
  },
  {
    title: 'Third thing',
    description: 'Something to do'
  }
];

function App() {
  return (
    <div>
      <Stepper
        steps={steps}
        options={{ activeStepNumber: 2 }}
      />
    </div>
  );
}

export default App;
