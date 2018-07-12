import { GET_API } from '../constants/propertyList';

export default function getApi() {
  return {
    type: GET_API,
    request: fetch(
      'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London',
    ),
  };
}
