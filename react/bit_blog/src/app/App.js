import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Posts } from './pages/Posts';
import { NewPost } from './pages/NewPost';
import { Authors } from './pages/Authors';
import { About } from './pages/About';
import { SingleAuthor } from './pages/SingleAuthor';
import { SinglePost } from './pages/SinglePost';


export const App = () => {

  return (
    <Fragment>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/posts/new' component={NewPost} />
          <Route path='/Authors' component={Authors} />
          <Route path='/author/:id' component={SingleAuthor} />
          <Route path='/About' component={About} />
          <Route path="/posts/:postId" component={SinglePost} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
}

