import React, {Component} from 'react';
import {Grid, Cell, Footer, FooterSection, FooterLinkList} from 'react-mdl';





class Landing extends Component {
  render(){
    return(
      <div>
          <div className="executive-summary">
            <p className="aboutme-side">  Appium is a free automation framework that is open source. Appium is built for automating tests for ios, Android and Windows apps. Appium allows you to automate testing on your application without re-compiling it. Its cross platform ability allows you to to write tests in just about any mobile friendly language whether it be objective-c, swift, Java, C# etc and test it live on a server.</p>

            <p className="aboutme-side">   Appium is better described as a mobile version of Selenium which is a web browser automation tool for testing. The difference with Appium being that it takes into account and uses Selenium type commands for actions like swiping, zooming with more than one gesture and pressing instead of clicking.</p>

            <p className="aboutme-side">   Appium not only works for testing native applications but also for hybrid applications which are apps that contain mobile programs built in html5/javascript inside of native code like objective-c/swift. The benefit of writing hybrid programs is that you are able to write the same code for multiple platforms which helps test costs and time costs and Appium being cross platform is perfect for testing these cases by allowing the reuse of tests/code for each platform.</p>

              <p className="aboutme-side">So what exactly is Appium? How does it work exactly? Appium is a web server that shows “rest api” which is a representational state transfer api. Which is a website that responds to an api request. What rest api’s allow us to do with a tool like Appium is to allow us to make certain requests to apps we are testing and receive a response with results from what we requested from the application as it is working. ie a live test!</p>



      </div>








          </div>

    )
  }
}

export default Landing;
