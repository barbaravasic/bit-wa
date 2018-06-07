import React from 'react';

export const SearchBar = (props) => {
  const {handleSearchBar, inputValue} = props
    return (
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input id="icon_prefix" type="text" className="validate" onChange={(event)=>{handleSearchBar(event)}} value={inputValue} placeholder="Search Users"/>
          <label htmlFor="icon_prefix"></label>
        </div>
      </div>
    </form>
  </div>
    )
}