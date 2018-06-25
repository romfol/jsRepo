import React, { Component } from 'react';

const API = 'https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
const city = 'London';

export default class Text extends Component {
  constructor() {
    super();

    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API + city)
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.response.listings.map(list => ({
        price: `${list.price}`,
        image: `${list.img_url}`,
        title: `${list.title}`,
      })))
      .then(searchResults => this.setState({
        searchResults,
      }))
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { searchResults } = this.state;
    return searchResults.map(searched => (
      <div key={searched.title}>
        <img src={searched.image} alt="properties" />
        <p>
          {searched.price}
        </p>
        <p>
          {searched.title}
        </p>
      </div>
    ));
  }
}
