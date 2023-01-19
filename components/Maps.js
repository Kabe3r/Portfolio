import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const defaultMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});


const Maps = () => {
  return (
    <MapContainer className='h-full w-9/12 lg:w-full' center={[24.860966, 66.990501]} zoom={13}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[24.860966, 66.990501]} icon={defaultMarker}>
      <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
    </Marker>
  </MapContainer>
  )
}

export default Maps