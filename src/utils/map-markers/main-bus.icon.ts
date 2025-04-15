import {Icon} from 'leaflet'
import mainBusMarker from '../../../assets/mainBusMarker.png?url'

export const mainBusIcon = new Icon({
    iconUrl: mainBusMarker,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64]
});