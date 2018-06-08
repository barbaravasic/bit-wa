import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Authors</a></li>
            <li><a href="collapsible.html">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}