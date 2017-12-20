import React from 'react';

import Header from './Header.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Awards from './Awards.jsx';

export default class HomePage extends React.Component {

    render () {
      return (
        <div>
          <Header />
          <Skills />
          <Projects />
          <Awards />
        </div>
      )
    }

}
