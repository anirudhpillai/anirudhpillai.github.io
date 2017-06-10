import React from 'react';


export default class Header extends React.Component {

    render () {
      return (
        <div className="header z-depth-1">
          <div className="container">
            <div className="row">
              <div className="col s8">
                <h3 href="#" className="name">Anirudh Pillai</h3>
                <p>
                  Hi, I'm a software developer currently studying at UCL.
                </p>
                <a href="http://www.github.com/anirudhpillai" target="_blank" className="btn-floating waves-effect waves-light"><img className="git" src="https://cdn0.iconfinder.com/data/icons/social-glyph/30/github-120.png" alt="" /></a>
                <a href="http://uk.linkedin.com/in/anirudhpillai" target="_blank" className="btn-floating waves-effect waves-light"><img className="responsive-img" src="https://cdn4.iconfinder.com/data/icons/miu-social/60/linkedin-social-media-128.png" alt="" /></a>
                <a href="https://twitter.com/__anirudh__" target="_blank" className="btn-floating waves-effect waves-light"><img className="git" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-128.png" alt="" /></a>
                <a href="#contact" className="btn-floating waves-effect waves-light"><img className="git" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/mail-24-128.png" alt="" /></a>
              </div>
              <div className="col s4">
                <img src="profile.jpg" className="responsive-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      )
    }

}
