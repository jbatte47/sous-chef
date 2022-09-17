import {
  Cookware,
  Ingredient,
  Step,
  Text as CookText,
  Timer,
} from '@cooklang/cooklang-ts';
import { match, P } from 'ts-pattern';
import { Text } from '../../styled';

interface IRecipeStepProps {
  step: Step;
}

export function TextStepPart({ text }: { text: CookText }) {
  return <Text>{text.value}</Text>;
}

export function NamedStepPart({ item }: { item: Ingredient | Cookware }) {
  return <Text>{item.name}</Text>;
}

export function TimerStepPart({ timer }: { timer: Timer }) {
  return (
    <Text>
      {timer.quantity} {timer.units}
    </Text>
  );
}

export default function RecipeStep({ step }: IRecipeStepProps) {
  return (
    <>
      {step.map((part) =>
        match(part)
          .with({ type: 'text' }, (node) => <TextStepPart text={node} />)
          .with({ type: P.union('ingredient', 'cookware') }, (node) => (
            <NamedStepPart item={node} />
          ))
          .with({ type: 'timer' }, (node) => <TimerStepPart timer={node} />),
      )}
    </>
  );
}
