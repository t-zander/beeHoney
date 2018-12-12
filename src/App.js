import React, { Component } from 'react';
import Layout from './containers/Layout';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Layout/>
      </React.Fragment>
    );
  }
}

export default App; 
