import React from 'react';
import axios from 'axios';
import LogRocket from 'logrocket';
import { deviceDetect } from 'react-device-detect';
import ipLocation from 'iplocation';

import './stars.scss';
import Typed from 'react-typed';
import Firebase from '../Firebase';

class Intro extends React.Component {
  async componentWillMount() {
    LogRocket.init('rlcodt/portfolio');
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    const response = await axios.get(
      'https://curlmyip.org/'
    );
    const ip = await response.text();
    // console.log('IP', ip);
    let location = '';
    try {
      location = await ipLocation(ip);
    } catch (err) {
      console.log('could not get loc', err);
    }

    await Firebase.firestore()
      .collection('visitors')
      .add({
        ip,
        timestamp: new Date(),
        info: deviceDetect(),
        ...(location && { location })
      });
  }
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Hatem</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      'Front End Engineer',
                      'Full Stack Engineer',
                      'Software Engineer'
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
