import React, { Component } from 'react';
import  {Grid,Cell} from 'react-mdl';
class Education extends Component{
  render() {
    return(
      <Grid>
      <Cell col={3}>
      <img src={this.props.imgsrc} alt="avatar"
      style={{height:'90px'   }}/></Cell>
      <Cell col={9}>
      <h4 style={{marginTop:'0px' ,fontSize:'27px' ,fontFamily:'Trocchi' ,fontWeight:'bold' }}>{this.props.uniName}</h4>
      <h5 style={{color:'#5A5A5A',fontFamily:'Eb Garamond'  }}>{this.props.uniDescription}<span> • </span>{this.props.uniDate}</h5>
      <h6 style={{color:'#767474',fontFamily:'Playfair Display',marginTop:'-10px'  }}>{this.props.place}</h6>
      </Cell>
      </Grid>

    )

  }
}
export default Education;
