import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getApi, getLocations } from '../../actions/locationList';

class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getApi();
  }

  // getData() {
  //   getApi()
  //     .then(response => response.json())
  //     .then(parsedJSON => parsedJSON.response.listings.map(list => ({
  //       price: `${list.price}`,
  //       image: `${list.img_url}`,
  //       title: `${list.title}`,
  //     })))
  //     .then(searchResults => this.setState({
  //       searchResults,
  //     }))
  //     .catch(error => console.log('parsing failed', error));

  //   console.log('ok');
  // }

  render() {
   
    // console.log(getApi.searchResults);
    return (
      <div>
        11
        
      </div>
    );
  }
}

const mapDispatchToProps = {
    getApi,
    getLocations
  
}

function mapStateToProps(state) {
  return {
    propertyList: state.propertyList,
    someInFuture: state.someInFuture,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
