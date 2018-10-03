import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,CardText,Button, CardMenu,IconButton } from 'react-mdl';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }
toggleCategories(){
  if(this.state.activeTab===0)
  { return(
    <div className="projects-grid">
    {/* CArd project*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:
    'url(https://proglib.io/wp-content/uploads/2017/04/java-bg.jpg) center/cover'}}> Java Project</CardTitle>
    <CardText>  This project is MMDBS course project </CardText>
    <CardActions border >
   <a href='https://github.com/Fuad607/MMDBS-course-project' target="_blank"> <Button colored >Github</Button></a>
     </CardActions>
    <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
    </CardMenu>
    </Card>

    </div>
  )}
  else if(this.state.activeTab===1)
  { return(
    <div className="projects-grid">
    {/* CArd project*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:
    'url(vr.jpg) center/cover'}}> VR Project</CardTitle>
    <CardText>Virtual reality game for HTC VIVE</CardText>
    <CardActions border>
    <Button colored>About</Button>
   <a href='https://github.com/Fuad607/MMDBS-course-project' target="_blank"> <Button colored >Github</Button></a>
  <Link to="/video" target="_blank"><Button colored>Video</Button></Link>
    </CardActions>
    <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
    </CardMenu>
    </Card>


    {/* CArd project*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:
    'url(ar.jpg) center/cover'}}> AR Project</CardTitle>
    <CardText>Augmented reality game for Hololens  </CardText>
    <CardActions border>
    <Button colored  >About</Button>
   <a href='https://github.com/Fuad607/MMDBS-course-project' target="_blank"> <Button colored >Github</Button></a>
  <a href='https://www.youtube.com/watch?v=hYG3dg_fDHY&t=1s' target="_blank">  <Button colored>Video</Button></a>
    </CardActions>
    <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
    </CardMenu>
    </Card>


    </div>
  )}
  else if(this.state.activeTab===2)
  { return(
    <div className="projects-grid">
    {/* CArd project*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:
    'url(lr.jpg) center/cover'}}> Laravel Project</CardTitle>
  {/*  <CardText>  This project MMDBS course project </CardText> */}
    <CardActions border>
    <Button colored>Project Description</Button>
   <a href='https://github.com/Fuad607/persogridapp-firstversion' target="_blank"> <Button colored >Github</Button></a>
   </CardActions>
    <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
    </CardMenu>
    </Card>

    </div>
  )}
  else if(this.state.activeTab===3)
  { return(
    <div className="projects-grid">
    {/* CArd project*/}
    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
    <CardTitle style={{color:'#fff', height:'176px', background:
    'url(and.jpg) center/cover'}}> Android Project</CardTitle>
     <CardActions border>
    <Button colored>Project Description</Button>
   <a href='https://github.com/Fuad607/Clever_cup' target="_blank"> <Button colored >Github</Button></a>
     </CardActions>
    <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
    </CardMenu>
    </Card>

    </div>
  )}
}
  render() {
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
      <Tab>Java</Tab>
      <Tab>VR&AR</Tab>
      <Tab>Laravel</Tab>
      <Tab>Android</Tab>
       </Tabs>

       <Grid  >
       <Cell col={12}>
       <div className="content">{this.toggleCategories()}</div>
       </Cell>
       </Grid>

      </div>

    )

  }
}
export default Projects;
