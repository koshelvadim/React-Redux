import React from 'react';

const MyButton = ({children, props, className}) => {
  return (
    <button props={props} className={className}>{children}</button>
  )
}

export default MyButton