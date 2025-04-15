import {Icon} from 'leaflet'
import taxiMarker from '../../../assets/taxiMarker.png?url'

export const taxiIcon = new Icon({
    iconUrl: taxiMarker,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64]
});