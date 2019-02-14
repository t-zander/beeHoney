import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import ProductsContainer from "../../containers/Pages/ProductsContainer/ProductsContainer";
import ProductsSidebar from "../../containers/Pages/ProductsSidebar/ProductsSidebar";
import ProductsLayout from "../../components/ProductsLayout/ProductsLayout";
import * as actions from "../../actions/categories/categories";
import arrowDown from "../../assets/images/arrow-down.png";
import "./Shop.scss";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.myRef = null;
  }
  
  state = {
    transform: null
  };

  onScrollToProducts = () => {
    console.log('scroll')
    scroller.scrollTo(
      'products', 
      {duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      }
    )
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <section className="shop under-header">
        <div className="shop__mainContent">
          <div className="shop__chooseCateg">
            <h3 className="shop__title">Наша продукция</h3>
            <div className="shop__nav">
                <NavLink
                  onClick={this.onScrollToProducts}
                  exact
                  to='/shop'
                  activeClassName="shop__active"
                  >
                  Все продукты
                </NavLink>
              {categories
                ? categories.map(category => (
                    <NavLink
                      exact
                      key={category._id}
                      to={`/shop/${category._id}`}
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
              to="products"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <img src={arrowDown} />
            </Link>
          </div>
        </div>
        <div id="products">
          {/* <NavLink>Все товары</NavLink> */}

          {/* <NavLink>Ульи</NavLink>
        <NavLink>Другое</NavLink> */}

          <Route
            path="/shop/:categoryId?"
            component={ProductsLayout}
          />
          {/*  <div className="shop__products">
          <ProductsContainer />
        </div>
        <div className="shop__sidebar">
          <ProductsSidebar />
        </div> */}
        <div className="shop__arrow" onClick={scroll.scrollToTop}>
          to top
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
