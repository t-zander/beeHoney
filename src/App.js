import React, { Component } from "react";
import Layout from "./containers/Layout";
import Header from "./components/header";
import { Route } from "react-router-dom";
import mainPage from "./components/mainPage/mainPage";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout>
          <Route path="/" component={mainPage} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
