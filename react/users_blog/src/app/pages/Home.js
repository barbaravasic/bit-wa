import React from 'react'

import {Main} from '../partials/Main'
import {SearchBar} from '../partials/SearchBar'

export const Home = (props) =>{
    const {handleSearchBar, inputValue, listView, users} = props;

    return (
        <React.Fragment>
            <SearchBar  handleSearchBar={handleSearchBar} />
            <Main inputValue={inputValue} listView={listView} users={users}/>
        </React.Fragment>
    )
}