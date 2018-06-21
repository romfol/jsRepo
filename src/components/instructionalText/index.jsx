import React, { Component } from 'react';


const API = 'https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
let city = 'leeds';

export default class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.response.listings.map(list => (
      {
        price: `${list.price}`,
        type: `${list.property_type}`
      }
    )))
    .then(searchResults => this.setState({
      searchResults
    }))   
    .catch(error=>console.log('parsing failed', error))
  }

  render() {
    const {searchResults} = this.state;

    
      
        return searchResults.map(searched => {
          return <div key={searched.id}>{searched.price + searched.type}</div>
        })
      
    
  }
}