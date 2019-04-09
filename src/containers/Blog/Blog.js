import React, {Component} from 'react';
import './Blog.scss';

class Blog extends Component {
  render() { 
    return (
      <div className="blog under-header">
        <div className="blog__content">
          <h4>
            Страница в разработке
          </h4>
          <div className="blog__btnCont">
            <button onClick={() => this.props.history.push('/')}>На главную</button>
          </div>
        </div>
      </div>  
    );
  }
}
 
export default Blog;