import {useEffect, useState} from "react";
import {LatLngExpression} from "leaflet";
import {errorToast} from "@/shared/toasts.ts";

export default function useLocation() {
    const [location, setLocation] = useState<number[] | null>(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            const locationID = navigator.geolocation.watchPosition(
                // Success Callback
                (result: GeolocationPosition) => {
                    setLocation([result.coords.latitude, result.coords.longitude]);
                },

                // Error Callback
                (error: GeolocationPositionError) => {
                    let message: string;
                    switch (error.code) {
                        case 1:
                            message = 'Debe permitir el acceso a la ubicación';
                            break;
                        default:
                            message = 'No se pudo obtener la ubicación';
                            navigator.geolocation.clearWatch(locationID);
                    }
                    errorToast(message);
                },

                // Options
                {
                    enableHighAccuracy: true
                }
            );

            return () => {
                navigator.geolocation.clearWatch(locationID);
            }
        }
    }, []);

    return location as LatLngExpression;
}