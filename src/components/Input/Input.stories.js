import React from 'react';
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
}

export const Small = () => <Input size='small' placeholder='Small input'/>
export const Medium = () => <Input size='medium' placeholder='Medium input'/>
export const Large = () => <Input size='large' placeholder='Large input'/>
export const Invalid = () => <Input size='large' placeholder='Invalid input' variant='invalid'/>
export const Disabled = () => <Input size='large' placeholder='Disable input' disabled/>