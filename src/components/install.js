import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
const words = ['programming', 'outdoors', 'creating small ventures', 'learning from failure'];

var ReactRotatingText = require('react-rotating-text');

class Install extends Component {
  render(){
    return(
      <div className="install-page">
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 1:']}/>To Install Selenium simply click the IDE link on the website.</h1>
      <img src="https://i.imgur.com/eWNsRwC.jpg" style={{height: '400px', width: '300px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 2:']}/>Select which browser you would like to run the Selenium extension on.</h1>
      <img src="https://i.imgur.com/tnfg1sW.jpg" style={{height: '200px', width: '500px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 3:']}/>Once in the chrome store just click add to Chrome and add the extension on the popup.</h1>
      <img src="https://i.imgur.com/BZ4zLzO.jpg" style={{height: '170px', width: '530px', marginLeft: '100px', marginTop: '1px'}}/>
      <img src="https://i.imgur.com/Vhwk3SV.jpg" style={{height: '275px', width: '500px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 4:']}/>Open the Selenium icon at the top right of your Chrome browser.</h1>
      <img src="https://i.imgur.com/DTTwRvT.jpg" style={{height: '50px', width: '125px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 5:']}/>Select on either creating a new project, or begin recording an existing project.</h1>
      <img src="https://i.imgur.com/XFp0QLJ.jpg" style={{height: '230px', width: '340px', marginLeft: '100px', marginTop: '1px'}}/>
      </div>
    )
  }
}

export default Install;
