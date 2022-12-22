import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '../components/Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('with text', () => (
  <Button
    text={text('Text', 'Click me')}
    disabled={boolean('Disabled', false)}
    onClick={() => alert('Button clicked')}
  />
));
