import {Icon} from 'leaflet'
import supplierBusMarker from '../../../assets/supplierBusMarker.png?url'

export const supplierBusIcon = new Icon({
    iconUrl: supplierBusMarker,
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64]
});