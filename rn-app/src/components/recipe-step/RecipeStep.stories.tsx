import { storiesOf } from '@storybook/react-native';
import RecipeStep from '.';
import CenterView from '../../../storybook/stories/CenterView';
import { View } from '../../styled';

storiesOf('RecipeStep', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with basic example', () => (
    <View className="m-20">
      <RecipeStep
        step={[
          { type: 'text', value: 'Place the ' },
          {
            type: 'ingredient',
            name: 'apple juice',
            quantity: '1.5',
            units: 'cups',
          },
          { type: 'text', value: ', ' },
          {
            type: 'ingredient',
            name: 'banana',
            quantity: 'one sliced',
            units: '',
          },
          { type: 'text', value: ', ' },
          {
            type: 'ingredient',
            name: 'frozen mixed berries',
            quantity: '1.5',
            units: 'cups',
          },
          { type: 'text', value: ' and ' },
          {
            type: 'ingredient',
            name: 'vanilla greek yogurt',
            quantity: '0.75',
            units: 'cups',
          },
          { type: 'text', value: ' in a ' },
          { type: 'cookware', name: 'blender', quantity: 1 },
          {
            type: 'text',
            value:
              '; blend until smooth. If the smoothie seems too thick, add a little more liquid (1/4 cup).',
          },
        ]}
      />
    </View>
  ));
