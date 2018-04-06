import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(window).scroll(function () {
      if ($(window).scrollTop() < 60) {
        $('#mobile_nav').removeClass('fixed');
      }
      if ($(window).scrollTop() > 60) {
        $('#mobile_nav').addClass('fixed');
      }
    });

    $('#nav-icon').on('tap', function () {
      $(this).toggleClass('open');
      $('#mobile_nav .dropdown').toggleClass('show');
    });
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <h1>Servio.io</h1>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
