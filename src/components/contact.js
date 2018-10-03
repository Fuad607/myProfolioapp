import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

 
class Contact extends Component{
  render() {
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Fuad Shirinli</h2>
      <img src="contact.jpeg" alt="avatar"
      style={{height:'250px',borderRadius: '8px'}}
     />
      <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}> Konstanz, Germany</p>
      </Cell>
      <Cell col={6}>
      <h2>Contact details</h2>
      <hr/>
    <div className="contact-list">
    <List>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Libre Baskerville'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/> (+49) 160 99178893</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Libre Baskerville'}}>
            <i className="fa fa-envelope" aria-hidden="true"/> sirinlifuad@gmail.com</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Libre Baskerville'}}>
            <i className="fa fa-skype" aria-hidden="true"/> fuadsirinli</ListItemContent>
          </ListItem>
        </List></div>
      </Cell>

      </Grid>

               </div>

    )

  }
}
export default Contact;
