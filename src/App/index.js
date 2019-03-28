import React, { Component } from 'react';
import './app.css';
import {MainPage} from './MainPage';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <MainPage>
            </MainPage>
          </div>
        )}
      </div>
    );
  }
}
