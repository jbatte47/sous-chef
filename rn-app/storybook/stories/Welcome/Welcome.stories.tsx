import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';
import CenterView from '../CenterView';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);
