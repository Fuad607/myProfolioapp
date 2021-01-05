import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill.js';
class Resume extends Component{
  render() {
    return(
      <div className="resume">
      <Grid>
      <Cell col={3}>
      <h2 style={{paddingTop:'0.2em' , fontFamily:'Abril Fatface'   }}>Education</h2>
      <hr style={{borderTop:'3px solid #8221B6' ,width:'60%',marginLeft:'10px'}}/>

      </Cell>
      <Cell className='resume-right-col'col={9}>
      <div>
        <Education
        imgsrc="logo_kn.jpg"
        uniName="Konstanz University"
        uniDescription="Master of Computer and Information Science"
        uniDate="May 2016 - present"
        place="Konstanz, Germany"/>

        <Education
        imgsrc="qafqaz_logo.jpg"
        uniName="Qafqaz University"
        uniDescription="Bachelor of Information Technology and Systems"
        uniDate="Sep 2011 - May 2016"
        place="Baku, Azerbaijan"/>
        </div>
      </Cell>
      </Grid>
      <hr style={{borderTop:'1px solid #D3D2D3' ,width:'75%',marginLeft:'15%'}}/>

      <Grid>
      <Cell col={3}>
      <h2 style={{paddingTop:'0.2em' , fontFamily:'Abril Fatface'}}>Experience</h2>
      <hr style={{borderTop:'3px solid #8221B6' ,width:'60%',marginLeft:'10px'}}/>

      </Cell>
      <Cell className='resume-right-col'col={9}>
      <div>
    
      <Experience
      imgsrc="rentsoft.png"
      companyName="Rentsoft GmbH"
      job="Full Stack Web Developer"
      jobDate="October 2018 - present"
      jobDescription="Responsibilities: Develop and maintenance webpage."
      Link="http://rentsoft.de"
      place="München, Germany "/>
      
      <Experience
      imgsrc="logo_kn.jpg"
      companyName="Konstanz University"
      job="Web and Database Developer (HIWI job)"
      jobDate="May 2017 - Oct 2017"
      jobDescription="Responsibilities: Create a new website for Linguistic department."
      Link="http://bunnik.sprachwiss.uni-konstanz.de"
      place="Konstanz, Germany "/>

        <Experience
        imgsrc="qafqaz_logo.jpg"
        companyName="Qafqaz University, Techno park, Baku(Azerbaijan)"
        job="Java Developer(internship)"
        jobDate="May 2015 - August 2015"
        jobDescription="Responsibilities: Developed some java applications for university."
        place="Baku, Azerbaijan "/>

        <Experience
        imgsrc="qafqaz_logo.jpg"
        companyName="Qafqaz University, Techno park, Baku(Azerbaijan)"
        job="Web Developer (Internship)"
        jobDate="May 2014 - August 2014"
        jobDescription="Responsibilities: To develop and solve bugs in university website."
        place="Baku, Azerbaijan "/>
        </div>
      </Cell>
      </Grid>
      <hr style={{borderTop:'1px solid #D3D2D3' ,width:'75%',marginLeft:'15%'}}/>

      <Grid>
      <Cell col={3}>
      <h2 style={{paddingTop:'0.2em' , fontFamily:'Abril Fatface', fontSize:'40px'}}>Programming Skills</h2>
      <hr style={{borderTop:'3px solid #8221B6' ,width:'60%',marginLeft:'14px'}}/>

      </Cell>
      <Cell className='resume-right-col'col={9}>
     <Skill
     skill="PHP, Zend Framework, Laravel, HTML/CSS"
     progress={95}
     />
     <Skill
     skill="Oracle, MySQL, Pl/SQL"
     progress={90}
     />
     <Skill
     skill="JavaScript, Jquery, React JS, D3.js, Node.js"
     progress={90}
     />
    <Skill
     skill="Python"
     progress={80}
     />
     <Skill
     skill="Java, Android"
     progress={70}
     />
     <Skill
     skill="C, C#, C++"
     progress={60}
     />
      </Cell>
        <hr style={{borderTop:'1px solid #D3D2D3' ,width:'75%',marginLeft:'15%'}}/>
      <Cell col={3}>
      <h2 style={{paddingTop:'0.2em' , fontFamily:'Abril Fatface', fontSize:'40px'}}>Software Skills</h2>
      <hr style={{borderTop:'3px solid #8221B6' ,width:'60%',marginLeft:'14px'}}/>

      </Cell>
      <Cell col={9}>
      <h4 style={{marginTop:'10px' ,fontSize:'19px' ,fontFamily:'Trocchi' ,width:'60%' ,marginLeft:'35px'}}>Visual Studio, Android Studio, NetBeans, Git, Unix, PostgreSQL, Unity 3D, Microsoft Office, Windows, Mac OS, Linux, IntelliJ Idea, Microsoft Office Visio</h4>

      </Cell>
      </Grid>
      <hr style={{borderTop:'1px solid #D3D2D3' ,width:'75%',marginLeft:'15%'}}/>

      </div>

    )
  }
}
export default Resume;
