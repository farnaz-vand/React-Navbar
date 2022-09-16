 import React from "react";
 import './Button.css'

 const STYLES =[
  'btn--primary',
  'btn--large'
 ]
 const SIZES=[
  'btn--medium',
  'btn--large'
]

export const Button =({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

 return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick={onclick}
        type={type} > 
   {children} 
      </button>
 )
}