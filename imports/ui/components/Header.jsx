import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (
      <div className="header">
        <div className="helicopter_wrapper">
          <div className="balloon right">
            <a href="">Hire Me!</a>
          </div>
          <div className="helicopter">
            <img className="helicopter_body" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/bladeless_helicopter.png" alt="Helicopter with no blades" />
            <img className="blade" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20212/rotary_blade.png" alt="Helicopter Blades" />
            <div className="tailblade"></div>
          </div>
        </div>
        <div className="header-items">
          <h2>Servio Mora <br /> Full Stack Web Developer</h2>
        </div>
        <span className="arrow-link">
          <a><i className="material-icons" style={{fontSize:48}}>arrow_downward</i></a>
        </span>
      </div>
    );
  };
}

export default Header;
