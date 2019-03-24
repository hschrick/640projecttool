import React, {Component} from 'react';
import {Grid, Cell, Footer, FooterSection, FooterLinkList} from 'react-mdl';





class Landing extends Component {
  render(){
    return(
      <div>
          <div className="executive-summary">
            <p className="aboutme-side"> Selenium is a web browser automation testing tool. Its main functions are for creating scripts in order to reproduce bugs and for automated testing. How it works is it records the browser and how the user interacts with the browser in order to optimize testing time and costs.</p>

            <p className="aboutme-side"> So what exactly is Selenium? How does it work exactly? Selenium is a plugin extension that works so far for both Google Chrome and Firefox. It is both incredibly lightweight while also being incredibly useful in more than one way. Not only can you test automation on these platforms but you can also automate gestures and even large tasks with this simple tool so it really is more than just a software testing tool.</p>

            <p className="aboutme-side"> In essence the software testing portion of this tool allows the user to set a use case they would like the test, hit the record button and go through the process on a specific website/web-tool you are testing for such as logging into a website. Once done you hit pause and you are able to analyze whether or not your use case was successful and other outputs given by Selenium. This allows for a quick and easy test/fix for the software tester.</p>

              <p className="aboutme-side"></p>



      </div>








          </div>

    )
  }
}

export default Landing;
