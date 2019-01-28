import React, { Component } from "react";
import "./Admin.scss";
import * as categoriesActions from "../../actions/categories/categories";
import { connect } from "react-redux";
class Admin extends Component {
  componentWillMount() {
    this.props.onFetchCategories();
  }

  render() {
    return (
      <div className="admin">
        <div className="admin__categories">
          {this.props.categories.map(category => {
            return (
              <div key={category._id} className="admin__category">
                <h1>{category.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
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
    onFetchCategories: () => dispatch(categoriesActions.fetchAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
