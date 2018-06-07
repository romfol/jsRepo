import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,document.getElementById("app")
);