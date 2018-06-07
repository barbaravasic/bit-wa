import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const { title, listView, onListViewChange, loadUsers, onAboutClick } = props;

  const viewModeHandler = (event) => {
    event.preventDefault();
    onListViewChange();
  }

  const toggleGridIcon = () => {
    if (listView) {
      return <li className="right"><a><i className="material-icons right" onClick={viewModeHandler} >view_list</i></a></li>

    } else {
      return <li className="right"><a><i className="material-icons " onClick={viewModeHandler}>view_module</i></a></li>
    }
  }


  return (
    <nav>
      <div className="nav-wrapper" >
        <div className="container">
          <a className="brand-logo center">{title}</a>
          <ul>
            {toggleGridIcon()}
            <li className="right"><a><i className="material-icons" onClick={() => loadUsers()}>refresh</i></a></li>
            <li className="right"><Link to='/About' onClick={() => {onAboutClick()}}>About</Link></li>
          </ul>
        </div>


      </div>
    </nav>
  )
}