import React, { Component } from 'react';
import { Alert, AlertActionCloseButton, BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import '@app/app.css';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';
import SpacesPage from './SpacesPage';
import SpaceView from './SpaceView';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  public state = {
    isShowing: true
  };
  public render() {
    const { isShowing } = this.state;
    return (
      <React.Fragment>
        <BackgroundImage src={images} />
        {/* <SpacesPage/> */}
        <SpaceView/>
      </React.Fragment>
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}
