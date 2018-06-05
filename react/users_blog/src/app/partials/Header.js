import React from 'react';

export const Header = (props) => {
  const { title } = props
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo center">{title}</a>
      </div>
    </nav>
  )
}