import React from 'react';

export const Header = (props) =>{

    return(
        <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">{props.title}</a>
        </div>
      </nav>
    )
}