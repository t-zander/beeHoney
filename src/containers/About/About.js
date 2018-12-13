import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as aboutActions from '../../actions/about/about';

class About extends Component {
  
  componentDidMount() {
    this.props.onFetchAbout();
  }
  
  render() { 
    return ( 
      <React.Fragment>
        {/* <p>{this.props.about.about}</p> */}
      </React.Fragment>
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