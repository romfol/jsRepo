import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getApiActions from '../../actions/locationList';

class Lists extends Component {
  constructor(props) {
    super(props);
  }
//   componentDidMount() {
//     this.props.getApi();
// }
  

//   fetchData() {
//     getApi
//       .then(response => response.json())
//       .then(parsedJSON => parsedJSON.response.listings.map(list => ({
//         price: `${list.price}`,
//         image: `${list.img_url}`,
//         title: `${list.title}`,
//       })))
//       .then(searchResults => this.setState({
//         searchResults,
//       }))
//       .catch(error => console.log('parsing failed', error));
//   }
  
  render() {
    
     const {getApi} = this.props.getApi;
    console.log(getApi())
  //   // console.log(this.props.getApi)
  //   // console.log(this.props.propertyList.data)
  //    console.log(this.props.propertyList.list)
    
    return <div>{this.props.propertyList.list}</div>;
    <div>{this.props.propertyList.list}</div>;
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
