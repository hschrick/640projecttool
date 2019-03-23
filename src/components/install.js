import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Install extends Component {
  render(){
    return(
      <div>
          <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h3 className="aboutme-side">Hello! my name is Harris Schrick.<br/>
              <br/>
              This website is a place for me to update about work that I am doing inside and outside of class.<br/>
              Feel free to look around and contact me at any time I will reply within one hour!</h3>
          </Cell>
          <Cell col={6} className="skills-side">
            <h3 className="skills-list"><center>skills</center></h3>
            <h4 className="typistfont"><center><span style={{color: '#FFD700' }}>Experienced</span>   <span style={{color: '#98FB98' }}>Skilled</span></center></h4>
            <hr style={{borderTop: '1.5px dashed hotpink', width: '100%'}}></hr>
            <br/>
            <h4 className="typistfont"><center><span style={{color: '#98FB98' }}>C#</span>   <span style={{color: '#98FB98' }}>C/C++</span> <span style={{color: '#98FB98' }}>objective-C</span></center></h4>
            <h4 className="typistfont"><center><span style={{color: '#98FB98' }}>React</span>   <span style={{color: '#98FB98' }}>JavaScript</span> <span style={{color: '#98FB98' }}>HTML/CSS</span></center></h4>
            <h4 className="typistfont"><center><span style={{color: '#98FB98' }}>Java</span>   <span style={{color: '#98FB98' }}>JSCanvas</span> <span style={{color: '#FFD700' }}>SML</span></center></h4>
            <h4 className="typistfont"><center><span style={{color: '#FFD700' }}>Swift</span>   <span style={{color: '#FFD700' }}>Prologue</span> <span style={{color: '#FFD700' }}>Assembly</span></center></h4>
            <h4 className="typistfont"><center><span style={{color: '#FFD700' }}>SQL</span>   <span style={{color: '#98FB98' }}>ios/Mobile</span> <span style={{color: '#98FB98' }}>Web-Dev</span></center></h4>
          </Cell>
        </Grid>
      </div>
      </div>
    )
  }
}

export default Install;
