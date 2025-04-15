import useRoute from "@/hooks/useRoute.ts";
import {useEffect, useState} from "react";
import useToken from "@/hooks/useToken.ts";
import {errorToast} from "@/shared/toasts.ts";

export default function useFetch(resource: string, params?: any) {
    const [data, setData] = useState();
    const token = useToken();
    const {route} = useRoute();

    useEffect(() => {
        const controller = new AbortController();
        let authToken: { apikey: string } | { Authorization: string };
        const getData = (url: string) => {
            fetch(url + resource + '?' + new URLSearchParams(params), {
                signal: controller.signal,
                headers: authToken,
            })
                .then(res => res.json())
                .then(data => setData(data.lista))
                .catch(error => {
                    if (error.message.includes('NetworkError')) {
                        errorToast('No se pudo establecer la conexión');
                    }
                });
        }

        switch (route.type) {
            case 'bus':
                authToken = {apikey: token};
                getData(import.meta.env.VITE_BUS_URL);
                break;
            case 'taxi':
                authToken = {Authorization: `Bearer ${token}`};
                getData(import.meta.env.VITE_TAXI_URL);
                break;
        }

        return () => {
            controller.abort();
        }
    }, [route, token, resource, params]);

    return data || [];
}