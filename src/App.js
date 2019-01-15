import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import ShopPage from "./containers/Shop/Shop";
import AboutPage from "./containers/About/About";
import BlogPage from "./containers/Blog/Blog";
import Admin from "./containers/Admin/Admin";
import AdminLogin from "./containers/AdminLogin/AdminLogin";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout>
          <Switch>
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin" component={Admin} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/" exact component={MainPage} />
            <Route
              render={() => (
                <h3
                  style={{
                    background: "green"
                  }}
                >
                  OOOOPS 404 error
                </h3>
              )}
            />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
