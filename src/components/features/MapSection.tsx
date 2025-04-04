// import useRoute from "@/hooks/useRoute.ts";
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import {routes} from '@/utils/rutas.ts'
import {Bus} from "@/types";
import {mainBusIcon} from "@/utils/main-bus.icon.ts";
import {supplierBusIcon} from "@/utils/supplier-bus.icon.ts";

interface MarkerObject {
    id: string;
    ruta: string;
    latLong: LatLngExpression;
}

export default function MapSection() {
    const location: LatLngExpression = [23.136667, -82.358889];
    const buses = routes.map((route: Bus): MarkerObject[] => {
        return {
            id: route.numero,
            ruta: route.ruta.trim(),
            latLong: [route.lat, route.lon],
        }
    });

    const markers = buses.map((bus: MarkerObject) => (
        <Marker position={bus.latLong} key={bus.id} icon={bus.ruta.startsWith('P') ? mainBusIcon : supplierBusIcon}>
            <Popup className="text-center">Ruta: {bus.ruta}</Popup>
        </Marker>
    ))
    // const {route} = useRoute();
    return (
        <div className="px-1 h-full">
            <MapContainer
                center={location}
                zoom={12}
                scrollWheelZoom={false}
                className="h-full rounded"
                zoomControl={false}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={location}/>
                {markers}
            </MapContainer>
        </div>
    );
}