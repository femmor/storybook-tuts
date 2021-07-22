import React from 'react';
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
}

export const Small = () => <Input variant='small' placeholder='Small input'/>
export const Medium = () => <Input variant='medium' placeholder='Medium input'/>
export const Large = () => <Input variant='large' placeholder='Large input'/>