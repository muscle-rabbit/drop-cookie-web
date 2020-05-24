import * as React from "react"
import { CookieMapModel } from '@models/CookieMap';
import { CookieMapVars, GET_COOKIEMAP, CookieMapData, } from "../../graphql/cookieMap";
import { useQuery } from "@apollo/react-hooks"
import { CircularProgress } from '@material-ui/core';

interface IProps {
  cookiMapID: string
}

const CookieMap: React.SFC<IProps> = (props) => {
  const { loading, data, error } = useQuery<CookieMapData, CookieMapVars>(
    GET_COOKIEMAP,
    { variables: { id: props.cookiMapID } }
  );
  return loading ? <div>
    {{ data }}
  </div> : <div>now loading</div>
}