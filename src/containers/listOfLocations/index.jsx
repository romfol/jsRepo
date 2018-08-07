import React from 'react';
import { connect } from 'react-redux';
import { getApi, getLocations } from '../../actions/locationList';

class Lists extends React.Component {
  componentDidMount() {
    this.props.getApi();
  }

  itemsList() {
    return this.props.propertyList.list.map(sample => (
      <div key={sample.summary}>
        <img src={sample.img_url} alt="properties" />
        <br />
        <span>
          {sample.price_formatted}
        </span>
        <span>
          {sample.title}
        </span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.props.propertyList.list.length > 0 && this.itemsList()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getApi,
};

function mapStateToProps(state) {
  return {
    propertyList: state.propertyList,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
