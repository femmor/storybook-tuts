import React from 'react'
import './Input.css'

const Input = ({ size='medium', variant, children, ...rest}) => {
  return (
    <input className={`input ${size} ${variant}`} placeholder={children} {...rest} />
  )
}

export default Input
