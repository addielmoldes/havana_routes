import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon, LatLngExpression} from "leaflet";
import {Bus, BusType} from "@/types";
import useFetch from "@/hooks/useFetch.ts";
import useRoute from "@/hooks/useRoute.ts";
import {userIcon} from "@/utils/map-markers/user.icon.ts";
import {mainBusIcon} from "@/utils/map-markers/main-bus.icon.ts";
import {taxiIcon} from "@/utils/map-markers/taxi.icon.ts";
import {supplierBusIcon} from "@/utils/map-markers/supplier-bus.icon.ts";
import {secondaryBusIcon} from "@/utils/map-markers/secondary-bus.icon.ts";
import useLocation from "@/hooks/useLocation.ts";

export default function MapSection() {
    const location = useLocation();
    const busData: Bus[] = useFetch('/busruta');
    const {route} = useRoute();

    let icon: Icon;
    switch (route.type) {
        case 'bus':
            switch (route.red) {
                case BusType.main:
                    icon = mainBusIcon;
                    break;
                case BusType.supplier:
                    icon = supplierBusIcon;
                    break;
                case BusType.secondary:
                    icon = secondaryBusIcon;
                    break;
            }
            break;
        case "taxi":
            icon = taxiIcon;
            break;
    }

    const buses = busData.filter((vehicle: Bus) => vehicle.id_ruta === route.id);
    const busMarkers = buses.map((vehicle: Bus) => (
        <Marker key={vehicle.numero} position={[vehicle.lat, vehicle.lon]} icon={icon}>
            <Popup>
                <h1 className="font-bold text-base">Ruta {route.ruta}</h1>
                {route.type === 'bus' && vehicle.ubicacion && (
                    <div><strong>Ubicación: </strong>{vehicle.ubicacion}</div>
                )}
                <div><strong>Origen: </strong>{route.origen}</div>
                <div><strong>Destino: </strong>{route.destino}</div>
                {route.type === 'bus' && vehicle.proxima_parada && (
                    <div><strong>Próxima parada: </strong>{vehicle.proxima_parada}</div>
                )}
                <div><strong>Velocidad: </strong>{vehicle.velocidad} km/h</div>
            </Popup>
        </Marker>
    ));

    return (
        <div className="px-1 h-full">
            <MapContainer
                center={[23.136667, -82.358889]}
                zoom={12}
                className="h-full rounded"
                zoomControl={false}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {location && <Marker position={location as LatLngExpression} icon={userIcon}/>}

                {busMarkers}
            </MapContainer>
        </div>
    );
}