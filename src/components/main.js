import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import MyBlog from './myblog';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import MyVideo from './video';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/contact" component={Contact} />
    <Route path="/myblog" component={MyBlog} />

    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/video" component={MyVideo}/>

  </Switch>
)




export default Main;
