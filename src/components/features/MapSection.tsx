import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon, LatLngExpression} from "leaflet";
import {Bus, BusType} from "@/types";
import useFetch from "@/hooks/useFetch.ts";
import useRoute from "@/hooks/useRoute.ts";
import {mainBusIcon} from "@/utils/main-bus.icon.ts";
import {taxiIcon} from "@/utils/taxi.icon.ts";
import {supplierBusIcon} from "@/utils/supplier-bus.icon.ts";
import {secondaryBusIcon} from "@/utils/secondary-bus.icon.ts";

export default function MapSection() {
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

    const userLocation: LatLngExpression = [23.136667, -82.358889];
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
                center={userLocation}
                zoom={12}
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