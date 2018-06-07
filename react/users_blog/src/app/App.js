import React from 'react';
import './App.css';

import { getUsers } from '../services/services';

import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Main } from './partials/Main'
import { SearchBar } from './partials/SearchBar'

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listView: !localStorage.getItem("listView"),
      users: [],
      inputValue: "",

    };
  }

  loadUsers = () => {
    getUsers()
      .then((users) => {
        this.setState({
          users
        })
      })
  }

  componentDidMount() {
    this.loadUsers();
  }

  onListViewChange = () => {

    const isListView = this.state.listView
    this.setState({ listView: !isListView });
    localStorage.setItem("listView", !isListView)
  }

  handleSearchBar = (event) => {
    this.setState({
      inputValue: event.target.value
    })

    // const filteredUsers = users.filter(user =>
    //   user.name.includes(inputValue)
    // )
  }


  render() {
    return (
      <React.Fragment>
        <Header title='Bit Users' listView={this.state.listView} onListViewChange={this.onListViewChange} loadUsers={this.loadUsers} />
        <SearchBar handleSearchBar={this.handleSearchBar} inputValue={this.state.inputValue} />
        <Main listView={this.state.listView} users={this.state.users}  inputValue={this.state.inputValue}/>
        <Footer />
      </React.Fragment>

    )
  }

}

