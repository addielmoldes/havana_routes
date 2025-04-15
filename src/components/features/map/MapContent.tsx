import useRoute from "@/hooks/useRoute.ts";
import {Bus, BusType} from "@/types";
import useFetch from "@/hooks/useFetch.ts";
import useLocation from "@/hooks/useLocation.ts";
import {Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {Icon} from "leaflet";
import {mainBusIcon} from "@/utils/map-markers/main-bus.icon.ts";
import {supplierBusIcon} from "@/utils/map-markers/supplier-bus.icon.ts";
import {secondaryBusIcon} from "@/utils/map-markers/secondary-bus.icon.ts";
import {taxiIcon} from "@/utils/map-markers/taxi.icon.ts";
import {useEffect} from "react";
import {userIcon} from "@/utils/map-markers/user.icon.ts";

export default function MapContent() {
    const {route} = useRoute();
    const busData: Bus[] = useFetch('/busruta');
    const location = useLocation();
    const map = useMap();

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

    useEffect(() => {
        if (location) {
            map.flyTo(location);
        }
    }, [location]);

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
        <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {location && <Marker position={location} icon={userIcon}/>}
            {busMarkers}
        </>
    )
}