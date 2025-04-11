import 'leaflet/dist/leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {L, Icon, LatLngExpression} from "leaflet";
import {Bus} from "@/types";
import useFetch from "@/hooks/useFetch.ts";
import useRoute from "@/hooks/useRoute.ts";
import {mainBusIcon} from "@/utils/main-bus.icon.ts";
import {taxiIcon} from "@/utils/taxi.icon.ts";
import {supplierBusIcon} from "@/utils/supplier-bus.icon.ts";
import {secondaryBusIcon} from "@/utils/secondary-bus.icon.ts";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function MapSection() {
    L.Marker.prototype.options.icon = DefaultIcon;
    const busData: Bus[] = useFetch('/busruta');
    const {route} = useRoute();

    let icon: Icon;
    switch (route.type) {
        case 'bus':
            switch (route.busType) {
                case 'main':
                    icon = mainBusIcon;
                    break;
                case 'supplier':
                    icon = supplierBusIcon;
                    break;
                case 'secondary':
                    icon = secondaryBusIcon;
                    break;
            }
            break;
        case "taxi":
            icon = taxiIcon;
            break;
    }

    const userLocation: LatLngExpression = [23.136667, -82.358889];
    const buses = busData.filter((bus: Bus) => bus.ruta.includes(route.code));
    const busMarkers = buses.map((bus: Bus) => (
       <Marker key={bus.id_ruta} position={[bus.lat, bus.lon]} icon={icon}>
           <Popup></Popup>
       </Marker>
    ));

    return (
        <div className="px-1 h-full">
            <MapContainer
                center={userLocation}
                zoom={12}
                scrollWheelZoom={false}
                className="h-full rounded"
                zoomControl={false}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={userLocation}/>
                {busMarkers}
            </MapContainer>
        </div>
    );
}