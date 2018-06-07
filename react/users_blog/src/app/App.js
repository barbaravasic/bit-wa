import React from 'react';
import './App.css';

import { getUsers } from '../services/services';

import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Home } from './pages/Home'
import { Loader } from './partials/Loader';
import { About } from './pages/About'

import { Route } from 'react-router-dom'


export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listView: !localStorage.getItem("listView"),
      users: [],
      inputValue: "",
      loading: true
    };
  }

  loadUsers = () => {
    this.setState({
      loading: true
    })
    getUsers()
      .then((users) => {
        this.setState({
          users,
          loading: false
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
    const eventValue = event.target.value;
    this.setState({
      inputValue: eventValue.toLowerCase()
    })
  }

  renderMyView() {
    if (this.state.loading) {
      return <Loader />
    } else {
      return (
        <Home handleSearchBar={this.handleSearchBar} inputValue={this.state.inputValue} listView={this.state.listView} users={this.state.users} />
      )
    }
  }

  render() {

    return (
      <React.Fragment>
        <Header title='Bit Users' listView={this.state.listView} onListViewChange={this.onListViewChange} loadUsers={this.loadUsers} onAboutClick={this.onAboutClick} />
        <Route exact path='/' render={() => this.renderMyView()} />
        <Route exact path='/About' component={About} />
        <Footer />
      </React.Fragment>
    )

  }
}

