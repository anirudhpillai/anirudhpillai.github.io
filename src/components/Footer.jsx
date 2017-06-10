import React from 'react';


export default class Footer extends React.Component {

    render () {
      return (
        <footer className="page-footer" id="contact">
          <div className="container">
            <div className="row">
              <h1 className="white-text">Contact Me</h1>
              <p className="grey-text text-lighten-4">ani@ucl.ac.uk</p>
              <p className="grey-text text-lighten-4">Thanks, check back later for more projects.</p>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            &copy; 2017 Anirudh Pillai
            </div>
          </div>
        </footer>
      )
    }

}
