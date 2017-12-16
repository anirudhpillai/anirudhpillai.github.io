import React from 'react';

import profilePic from './../img/profile.jpg'

export default class Header extends React.Component {

    render () {
      return (
        <div className="header">
          <div className="container">
            <h1 href="#" className="name">Anirudh Pillai</h1>
            <p>
              Hi, I'm a software developer currently studying at UCL.
            </p>
            <p>
              I'm currently working on a framework for verifiying distributed protocols.
            </p>
            <div className="btns">
              <a href="http://www.github.com/anirudhpillai" target="_blank" className="btn-floating waves-effect waves-light"><img className="icn" src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/github-120.png" alt="" /></a>
              <a href="http://uk.linkedin.com/in/anirudhpillai" target="_blank" className="btn-floating waves-effect waves-light"><img className="responsive-img" src="https://cdn4.iconfinder.com/data/icons/miu-social/60/linkedin-social-media-128.png" alt="" /></a>
              <a href="https://twitter.com/__anirudh__" target="_blank" className="btn-floating waves-effect waves-light"><img className="icn" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png" alt="" /></a>
              <a href="#contact" className="btn-floating waves-effect waves-light"><img className="icn" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/mail-24-128.png" alt="" /></a>
            </div>
          </div>
        </div>
      )
    }

}
