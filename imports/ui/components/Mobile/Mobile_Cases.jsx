import React, { Component } from 'react';

export default class MobileCases extends Component {
  constructor() {
    super();
  }

  mobileCases() {
    return [
      {_id: 1, url: 'https://maddcoffee.com', logo: '/images/logos/madd-logo.png', bg_img: '/images/cases/madd.jpg', bg_color: '#8E2051'},
      {_id: 2, url: 'http://cami.com', logo: '/images/logos/cami_logo-black.png', bg_img: '/images/cases/cami.jpg', bg_color: '#EF4639'},
      {_id: 3, url: 'https://shophauterebel.com', logo: '/images/logos/haute-logo.png', bg_img: '/images/cases/haute.jpg', bg_color: '#F6DC64'},
      {_id: 4, url: 'https://amcreditrepair.com/', logo: '/images/logos/cropped-amcredit.png', bg_img: '/images/cases/am-credit.jpeg', bg_color: '#7CCCD2'},
      {_id: 5, url: 'https://ockupy.com', logo: '/images/logos/ockupy-logo.png', bg_img: '/images/cases/ockupy.jpeg', bg_color: '#FFFFFF'}
    ]
  }

  renderMobileCases() {
    return this.mobileCases().map((project) => {
      return (
        <div key={project._id} className="wrapper">
          <a className="case" href={project.url} style={{ backgroundColor: `${project.bg_color}` }}>
            <img src={project.logo} />
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="mobile_cases">
        <h1>Cases</h1>
        {this.renderMobileCases()}
      </div>
    );
  }
}
