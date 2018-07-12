import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getApiActions from '../../actions/locationList';

class Lists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.getApi)
    console.log(this.props.propertyList.data)
    console.log(this.props.propertyList.list)
    
    return <div>{this.props.propertyList.list}</div>;
    
  }
}

function mapStateToProps(state) {
  return {
    propertyList: state.propertyList,
    someInFuture: state.someInFuture,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getApi: bindActionCreators(getApiActions, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
