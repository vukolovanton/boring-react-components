import { FC } from 'react';
import { StepperProps } from '../interfaces/stepper/Stepper.interfaces';
import style from './Stepper.module.css';


const Stepper: FC<StepperProps> = ({ steps, options }) => {
  const { activeStepNumber = 0 } = options;

  return (
    <ol className={style.stepper}>
      {
        steps.map((step, index) => (
          <li className={style.item} key={step.title}>
            <h4
              className={style.circle}
              style={{
                opacity: activeStepNumber === index ? 1 : 0.5
              }}
            >
              {index + 1}
            </h4>
            <h3 className={style.title}>{step.title}</h3>
            <p className={style.desc}>{step.description}</p>
          </li>
        ))
      }
    </ol>
  );
};

export { Stepper };
