import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Posts } from './pages/Posts';

export const App = () => {

  return (
    <Fragment>
      <Header />
      <Posts />
      {/* <NewPost />
      <Authors />
      <SingleAuthor />
      <SinglePost />
      <About /> */}
      <Footer />
    </Fragment>
  );
}

