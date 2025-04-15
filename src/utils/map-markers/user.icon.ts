import {Icon} from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const userIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    shadowSize: [30, 65],
    iconAnchor: [12, 41],
    shadowAnchor: [7, 65]
});