import React from 'react';

export const Header = (props) => {
  const { title, listView, onListViewChange, loadUsers } = props;

  const viewModeHandler = (event) => {
    event.preventDefault();
    onListViewChange();
  }


  return (
    <nav>
      <div className="nav-wrapper" >
        <div className="container">
          <a className="brand-logo center">{title}</a>
          <ul>
            {
              listView ?
                <li className="right"><a><i className="material-icons right" onClick={viewModeHandler} >view_list</i></a></li>
                :<li className="right"><a><i className="material-icons " onClick={viewModeHandler}>view_module</i></a></li>
            }
            <li className="right"><a><i className="material-icons" onClick={() => loadUsers()}>refresh</i></a></li>

          </ul>
        </div>


      </div>
    </nav>
  )
}