import React from 'react'
import './Input.css'

const Input = ({ variant='medium', children, ...rest}) => {
  return (
    <input className={`input ${variant}`} placeholder={children} {...rest} />
  )
}

export default Input
