import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
const words = ['programming', 'outdoors', 'creating small ventures', 'learning from failure'];

var ReactRotatingText = require('react-rotating-text');

class AdvancedCase extends Component {
  render(){
    return(
      <div className="basecase-page">
      <h1 className="baseexplanation">So I’ve decided to do my advanced usage on a widely known web application: Wolframalpha</h1>
      <img src="https://i.imgur.com/4Z3RxC6.png" style={{height: '250px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 1:']}/>Start by creating a new project.</h1>
      <img src="https://i.imgur.com/8HeVEab.png" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 2:']}/>Enter the URL of the website you wish to test.</h1>
      <img src="https://i.imgur.com/fQLCjIh.png" style={{height: '200px', width: '400px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 3:']}/>Proceed through a typical user experience. You should see this pop up in the bottom right.</h1>
      <img src="https://i.imgur.com/FiQGDYP.png" style={{height: '120px', width: '650px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 4:']}/>Press top when you’re done with the testing process.</h1>
      <img src="https://i.imgur.com/mOvRIQv.png" style={{height: '140px', width: '250px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 5:']}/>During the test I typed “sin(1)”, Enter, Then typed “sin(1)+cos(1)” These were the results via Selenium. Selenium recorded every step from click to type, to enter.</h1>
      <img src="https://i.imgur.com/RvzQCct.png" style={{height: '325px', width: '700px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 6:']}/>Pick something you want to change.</h1>
      <img src="https://i.imgur.com/oVNXkls.png" style={{height: '200px', width: '500px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 7:']}/>See the results.</h1>
      <img src="https://i.imgur.com/GvFOQJf.png" style={{height: '75px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      </div>
    )
  }
}

export default AdvancedCase;
