import * as React from "react"
import { CookieMapModel } from '@models/CookieMap';
import GoogleMapReact from "google-map-react";
import Marker from "@molecules/Marker"

interface IProps {
  cookieMap: CookieMapModel
}

const CookieMap: React.SFC<IProps> = ({ cookieMap, ...props }) => {
  const positions = cookieMap.positions
  const defaultPosition = positions[0]
  return (
    <div style={{ height: '90vh', width: '100%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: defaultPosition.latitude, lng: defaultPosition.longitude }}
        defaultZoom={15}
      >
        {positions.map((position) => (
          <Marker key={position.id} lat={position.latitude} lng={position.longitude} />
        ))}
      </GoogleMapReact>
    </div>
  )
}

// const Marker = props => {
//   return <div className="SuperAwesomePin">

//   </div>
// }


export default CookieMap