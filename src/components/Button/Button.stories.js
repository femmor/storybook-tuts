import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>
export const Stretch = () => <Button variant='primary stretch' >Stretched Button</Button>
export const Disabled = () => <Button variant="disabled" disabled>Disabled</Button>

Disabled.storyName = "Disabled button"