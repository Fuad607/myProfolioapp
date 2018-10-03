import React, { Component } from 'react';
import  {Grid,Cell,ProgressBar} from 'react-mdl';
class Skill extends Component{
  render() {
    return(
      <Grid>
      <Cell col={3}>
      <div style={{display:'flex',fontFamily:'Eb Garamond',fontSize:'18px',fontWeight:'bold'}}>{this.props.skill} </div>
</Cell>

      <Cell col={9}>
 <ProgressBar  style={{ width:'50%',height:'21px'}}  class="mdl-progress mdl-js-progress mdl-progress-yellow" progress={this.props.progress}/>
      </Cell>
      </Grid>

    )

  }
}
export default Skill;
