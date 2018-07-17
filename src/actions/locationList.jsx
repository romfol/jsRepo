import { GET_API, GET_LOCATIONS } from '../constants/propertyList';

const searchResults = {};

export const getApi = () => ({
  type: GET_API,
  request: fetch(
    'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London',
  )
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.response.listings.map(list => ({
      price: `${list.price}`,
      image: `${list.img_url}`,
      title: `${list.title}`,
    })))
    .then(searchResults)
    .catch(error => console.log('parsing failed', error)),
});

export const getLocations = locations => ({
  type: GET_LOCATIONS,
  locations,
});
