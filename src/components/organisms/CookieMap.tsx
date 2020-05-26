import * as React from "react"
import { CookieMapModel } from '@models/CookieMap';
import GoogleMapReact from "google-map-react";

interface IProps {
  cookieMap: CookieMapModel
}

const CookieMap: React.SFC<IProps> = ({ cookieMap, ...props }) => {
  const positions = cookieMap.positions
  return (
    <div style={{ height: '80vh', width: '100%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: positions[0].latitude, lng: positions[0].longitude }}
        defaultZoom={8}
      >
        <div></div>
      </GoogleMapReact>
    </div>
  )
}


export default CookieMap