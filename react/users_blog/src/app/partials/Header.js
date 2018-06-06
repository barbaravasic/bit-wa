import React from 'react';

export const Header = (props) => {
  const { title, state, stateSetting, loadUsers} = props;
  return (
    <nav>
      <div className="nav-wrapper" >
        <div className="container">
          <a className="brand-logo center">{title}</a>
          <ul>
            {
              state ?
                <li className="right"><i className="material-icons right" onClick={() => stateSetting(state)} >view_list</i></li>
                : <li className="right"><i className="material-icons " onClick={() => stateSetting(state)}>view_module</i></li>
            }
            <li className="right"><i className="material-icons" onClick={() => loadUsers()}>refresh</i></li>

          </ul>
        </div>


      </div>
    </nav>
  )
}