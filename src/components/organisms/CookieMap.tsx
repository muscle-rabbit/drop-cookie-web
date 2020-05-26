import * as React from "react"
import { CookieMapModel } from '@models/CookieMap';
import { CookieMapVars, GET_COOKIEMAP, CookieMapData, } from "../../graphql/cookieMap";
import { useQuery } from "@apollo/react-hooks"
import { CircularProgress } from '@material-ui/core';

interface IProps {
  cookieMap: CookieMapModel
}

const CookieMap: React.SFC<IProps> = ({ cookieMap }) => {
  return <div>
    {cookieMap.id}
  </div>
}

export default CookieMap