
import React, { Component } from 'react';

import Iframe from 'react-iframe';

import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
 class MyVideo extends Component {

  render() {
    return(
      <div class="container" style={{height:'60%',width:'70%', marginTop:'20px'}}>
        <div class="embed-responsive embed-responsive-16by9" >
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2Ji3elBpJpg"></iframe>
        </div>
        </div>
    )
  }
}

export default MyVideo;
