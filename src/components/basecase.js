import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
const words = ['programming', 'outdoors', 'creating small ventures', 'learning from failure'];

var ReactRotatingText = require('react-rotating-text');

class BaseCase extends Component {
  render(){
    return(
      <div className="basecase-page">
      <h1 className="baseexplanation">In this fundamental usage tutorial, we will be testing a login system that should follow the decision table below</h1>
      <img src="https://i.imgur.com/p26a4h4.jpg" style={{height: '100px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <p>The website used in the tutorial is: http://testing-ground.scraping.pro/login</p>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 1:']}/>Open Selenium and create a new project.</h1>
      <img src="https://i.imgur.com/LCzuyDq.png" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 2:']}/>Start with the perfect use case.</h1>
      <img src="https://i.imgur.com/8IPZlKM.jpg" style={{height: '200px', width: '150px', marginLeft: '100px', marginTop: '1px'}}/>
      <img src="https://i.imgur.com/hrpQuaC.png" style={{height: '200px', width: '550px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 3:']}/>Add in the url of the website being tested and click the record button.</h1>
      <img src="https://i.imgur.com/qvd7pR7.png" style={{height: '140px', width: '700px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 4:']}/>Go through the perfect use case as a user would in the browser window that pops up.</h1>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 5:']}/>Stop Recording when use case is complete. Examine the generated code.</h1>
      <img src="https://i.imgur.com/c1FoYDY.jpg" style={{height: '325px', width: '700px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 6:']}/>Duplicate the perfect use case test for however many planned tests are left.</h1>
      <img src="https://i.imgur.com/6qjiP44.png" style={{height: '200px', width: '200px', marginLeft: '100px', marginTop: '1px'}}/>
      <img src="https://i.imgur.com/iqP2YyK.png" style={{height: '340px', width: '300px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 7:']}/>Alter the generated code to reflect the decision table’s conditions and then rename the tests to reflect their place in the decision table.</h1>
      <img src="https://i.imgur.com/lvD1PES.jpg" style={{height: '340px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 8:']}/>Run all tests to ensure no alterations caused errors.</h1>
      <img src="https://i.imgur.com/jKgo3HN.jpg" style={{height: '340px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 9:']}/>Add testing functionality: In this case, we are adding assertions to each test to check if the action values from the decision table match the website’s response.
The pictures below demonstrate how to implement the  “assert text” command.
</h1>
  <img src="https://i.imgur.com/2XmGR7G.png" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
  <img src="https://i.imgur.com/KdfPmtw.png" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
  <img src="https://i.imgur.com/8AiuP0C.png" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 10:']}/>Move the testing statement to where it can appropriately run.</h1>
      <img src="https://i.imgur.com/nb3fLY1.jpg" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px'}}/>
      <h1 className="install-font"><ReactRotatingText style={{color:"hotpink"}}items={['Step 11:']}/>Examining A Failure
In this case, the assert statement demonstrated above will expect “WELCOME! :)” in a case that should be an invalid login.
</h1>
      <img src="https://i.imgur.com/IQksk9W.jpg" style={{height: '300px', width: '600px', marginLeft: '100px', marginTop: '1px', padding: '10px'}}/>
      </div>
    )
  }
}

export default BaseCase;
