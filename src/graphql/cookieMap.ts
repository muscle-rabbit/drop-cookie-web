import gql from 'graphql-tag';
import { CookieMapModel } from '@models/CookieMap'

export interface CookieMapData {
  cookieMap: CookieMapModel
}
export interface CookieMapVars {
  id: string
}

export const GET_COOKIEMAP = gql`
  query fetchCookieMap($id: String){
    cookieMap(id: $id){
      id
      title
      description
      createdAt
      positions {
        id
        longitude
        latitude
        createdAt
      }
    }
  }
`;
