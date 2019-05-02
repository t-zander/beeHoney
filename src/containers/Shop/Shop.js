import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import ProductsLayout from "../../components/ProductsLayout/ProductsLayout";
import * as actions from "../../actions/categories/categories";
import arrowDown from "../../assets/images/arrow-down.png";
import "./Shop.scss";
import {
  Link,
  animateScroll as scroll,
  scroller
} from "react-scroll";
import { browserHistory } from "react-dom";

class Shop extends Component {
  scrollOptions = {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  };

  state = {
    isScrollVisible: false
  };

  onScrollToProducts = () => {
    scroller.scrollTo(
      'products', 
      this.scrollOptions
    );
  }

  onScrollToTop = () => {
    /* this.setState({
      isScrollVisible: true
    }); */
    scroll.scrollToTop(this.scrollOptions);
  }

  handleScroll = () => {
    if(window.scrollY > 600) {
      this.setState({
        isScrollVisible: true
      })
    }else{
      this.setState({
        isScrollVisible: false
      })
    }
  }

  componentDidMount() {
    this.props.getAllCategories();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { categories, match } = this.props;

    return (
      <section className="shop under-header">
        <div className="shop__mainContent">
          <div className="shop__chooseCateg">
            <h3 className="shop__title">Наша продукция</h3>
            <div className="shop__nav">
                <NavLink
                  onClick={this.onScrollToProducts}
                  exact
                  to={`${match.url}`}
                  activeClassName="shop__active"
                  >
                  Все продукты
                </NavLink>
              {categories
                ? categories.map(category => (
                    <NavLink
                      exact
                      key={category._id}
                      to={`${match.url}/${category._id}`}
                      onClick={this.onScrollToProducts}
                      activeClassName="shop__active"
                    >
                      {category.name}
                    </NavLink>
                  ))
                : null}
            </div>
          </div>
          <div className="shop__arrow">
            <Link
              activeClass="active"
              to="/products"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <img src={arrowDown} alt="arrow down"/>
            </Link>
          </div>
        </div>
        <div id="products" className="products">
          
          <Route
            path={`${match.path}/:categoryId?`}
            render={(props) => <ProductsLayout {...props} categoriesIds={categories} />}
          />
          <div 
            className={(!this.state.isScrollVisible ? 'products__topArrow hidden' : 'products__topArrow')}
            onClick={() => scroll.scrollToTop(this.scrollOptions)}
            >
            <i className="fas fa-angle-up"></i>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => dispatch(actions.fetchAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
