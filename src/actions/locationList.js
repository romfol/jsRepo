import { GET_API, GET_LOCATIONS } from '../constants/propertyList';

export const getApi = () => ({
  type: GET_API,
  request: fetch(
    'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London',
  ),
});

export const getLocations = locations => ({
  type: GET_LOCATIONS,
  locations,
});
