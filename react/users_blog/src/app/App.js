import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Main } from './partials/Main'



export const App = () => {
  return (
    <React.Fragment>
      <Header title='Bit Users' />
      <Main />
      <Footer />
    </React.Fragment>

  )
}


