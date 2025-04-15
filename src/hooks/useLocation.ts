import {useEffect, useState} from "react";
import {toast} from "sonner";

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
                    toast.error('Error', {
                        description: message,
                        position: 'top-right',
                    });
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

    return location;
}