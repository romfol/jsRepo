import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

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