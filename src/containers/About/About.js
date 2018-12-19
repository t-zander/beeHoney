import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as aboutActions from '../../actions/about/about';

class About extends Component {
  
  componentDidMount() {
    this.props.onFetchAbout();
  }
  
  render() {   
    return ( 
      <div className="container">
        <h1>О нас</h1>
        <hr/>
        <div>
          <img src={this.props.about.imageUrl} alt=""/>
        </div>
        <p>{this.props.about.about}</p>
        <hr/>
        <h1>Контакты: </h1>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAbout: () => dispatch( aboutActions.fetchAll() )
  }
}

const mapStateToProps = (state) => {
  console.log(state.about.about);
  return {about: state.about.about};
}

export default connect(mapStateToProps, mapDispatchToProps)(About);