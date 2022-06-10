import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './ButtonStyle'

const Button = ({ color, children, link, type, handleChange }) => {
  return (
    <Wrapper bgColor={color}>
      <Link to={link}>
        <button type={type} onChange={handleChange}>
          {children}
        </button>
      </Link>
    </Wrapper>
  )
}

export default Button
