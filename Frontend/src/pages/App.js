import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeComponent from './dashboard/home/HomeComponent';
import CustomerComponent from './customer/CustomerComponent';

import {
  Segment,
  Sidebar,
  Menu,
  Icon,
  Image
} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            direction='left'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Menu.Item as={ Link } to='/'>
              <Icon name='chart pie' />
              Data
            </Menu.Item>
            <Menu.Item as={ Link } to='/customers'>
              <Icon name='area graph' />
              Cluster Analysis and segmentation
            </Menu.Item>
            <Menu.Item as={ Link } to='/predictions'>
              <Icon name='line graph' />
              Prediction
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={false} className="Pusher">
            <Menu>
              <Menu.Item
                name='editorials'
                active={false}
                header
              >
              <Image src='/Logo.png' size='mini' />
              Inventory
              </Menu.Item>
              <Menu.Item position='right' content="Change"/>
            </Menu>
            <Segment basic className='Segment'>
                <Route exact path='/' component={HomeComponent}/>
                <Route path='/customers' component={CustomerComponent}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
