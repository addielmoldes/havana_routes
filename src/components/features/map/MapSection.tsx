import 'leaflet/dist/leaflet.css';
import {MapContainer} from "react-leaflet";
import MapContent from "@/components/features/map/MapContent.tsx";

export default function MapSection() {

    return (
        <div className="px-1 h-full">
            <MapContainer
                center={[23.136667, -82.358889]}
                zoom={12}
                className="h-full rounded"
                zoomControl={false}
                attributionControl={false}
            >
                <MapContent/>
            </MapContainer>
        </div>
    );
}