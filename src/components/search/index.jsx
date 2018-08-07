import React from 'react';
import findLocation from '../../actions/locationList';
import { connect } from 'react-redux';

class Search extends React.Component {
  state = { value: '' };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.findLocation(this.state.value);
    console.log(this.state.value);
  };

  handleChange = e => {
    this.setState({ value: e.target.value });

    console.log(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br />
        <input type="submit" value="Go" />
        {/* <input type="submit" value="My location" /> */}
      </form>
    );
  }
}

const mapDispatchToProps = {
  findLocation,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
