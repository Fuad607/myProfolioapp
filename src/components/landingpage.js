import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component{
  render() {
    return(
      <div style={{width:'100%',margin:'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img src="https://lh3.googleusercontent.com/-C0h59jeBqB4/AAAAAAAAAAI/AAAAAAAAFnc/eJfJDwksfLA/s640-il/photo.jpg"
       alt="avatar"
      className="avatar-img"/>
      <div className="banner-text"><h1>Web Developer</h1>
      <hr/>
      <div className="social-links">
      {/*Linkedin profile*/}
      <a href="https://www.linkedin.com/in/fuad-shirinli-419715108/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true"/>
      </a>
      {/*Xing profile*/}
      <a href="https://www.xing.com/profile/Fuad_Shirinli/cv?sc_o=mxb_p" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-xing-square" aria-hidden="true"/>
      </a>
      {/*Github profile*/}
      <a href="https://github.com/Fuad607" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true"/>
      </a>
      {/*facebook profile*/}
      <a href="https://www.facebook.com/fuad.shirinli" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-facebook-square" aria-hidden="true"/>
      </a>
      {/*instagram profile*/}
      <a href="https://www.instagram.com/fuadshirinli/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-instagram" aria-hidden="true"/>
      </a>
      {/*skype profile*/}
      <a href="skype:fuadsirinli?call" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-skype" aria-hidden="true"/>
      </a>

      </div>
      </div>

       </Cell>
      </Grid>
      </div>

    )
  }
}
export default Landing;
