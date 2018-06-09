import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Posts } from './pages/Posts';
import { NewPost } from './pages/NewPost';
import { Authors } from './pages/Authors';
import { About } from './pages/About';
import { SinglePost } from './pages/SinglePost';
import { SingleAuthor } from './pages/SingleAuthor';

export const App = () => {

  return (
    <Fragment>
      <main>
      <Header />
      <Route exact path='/' component={Posts} />
      <Route exact path='/posts/new' component={NewPost} />
      <Route exact path='/Authors' component={Authors} />
      <Route exact path='/post/1' component={SinglePost} />
      <Route exact path='/author/id' component={SingleAuthor} />
      <Route exact path='/About' component={About} />
      </main>
      <Footer />
    </Fragment>
  );
}

