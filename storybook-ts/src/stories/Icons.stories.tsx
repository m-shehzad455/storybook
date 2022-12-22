import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from '../components/Icon';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

const sizes = ['small', 'medium', 'large'];

stories.add('with size', () => (
  <Icon
    name={select('Size', sizes, 'medium')}
    size={select('Size', sizes, 'medium')}
  />
));
