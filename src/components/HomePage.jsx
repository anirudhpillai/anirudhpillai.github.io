import React from 'react';

import Header from './Header.jsx';
import Skills from './Skills.jsx';
import Work from './Work.jsx';
import Interests from './Interests.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';

export default class HomePage extends React.Component {

    render () {
      return (
        <div>
          <Header />
          <Skills />
          <Work />
          <Interests />
          <Projects />
          <Footer />
        </div>
      )
    }

}
