import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const { title, listView, onListViewChange, loadUsers } = props;

  const viewModeHandler = (event) => {
    event.preventDefault();
    onListViewChange();
  }

  const toggleGridIcon = () => {
    if (!listView) {
      return <li className="right"><a><i className="material-icons right" onClick={viewModeHandler} >view_list</i></a></li>

    } else {
      return <li className="right"><a><i className="material-icons " onClick={viewModeHandler}>view_module</i></a></li>
    }
  }


  return (
    <nav>
      <div className="nav-wrapper" >
        <div className="container">
          <Link to ='/' className="brand-logo center">{title}</Link>
          <ul>
            {toggleGridIcon()}
            <li className="right"><a><i className="material-icons" onClick={() => loadUsers()}>refresh</i></a></li>
            <li className="right"><Link to='/About'>About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}