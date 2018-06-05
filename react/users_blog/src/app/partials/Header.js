import React from 'react';

export const Header = (props) =>{

    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">{props.title}</a>
        </div>
      </nav>
    )
}