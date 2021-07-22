import React from 'react'
import Button from './Button'
import Center from '../Center/Center';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>]
}

// using Args mechanism
const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: 'Success Button'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Danger Button'
}

export const Stretch = Template.bind({})
Stretch.args = {
  variant: 'primary stretch',
  children: 'Stretch Button'
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  variant: 'disabled',
  children: 'Disabled Button'
}
