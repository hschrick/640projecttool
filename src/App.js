import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="big-content">
    <Layout>
        <Header title="Selenium Tutorial" scroll>
            <Navigation>
                <Link className="header-links" to="/">Home</Link>
                <Link className="header-links" to="/install">Install</Link>
                <Link className="header-links" to="/basecase">Base Case</Link>
                <Link className="header-links" to="/advancedcase">AdvancedCase</Link>
            </Navigation>
        </Header>
        <hr style={{borderTop: '1.5px solid white', width: '30%' }}></hr>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
