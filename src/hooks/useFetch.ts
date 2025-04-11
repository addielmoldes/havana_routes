import useRoute from "@/hooks/useRoute.ts";
import {useEffect, useState} from "react";
import useToken from "@/hooks/useToken.ts";

export default function useFetch(resource: string) {
    const [data, setData] = useState();
    const token = useToken();
    const {route} = useRoute();

    useEffect(() => {
        const controller = new AbortController();
        let authToken: { apikey: string } | { Authorization: string };
        const getData = (url: string) => {
            fetch(url + resource, {
                signal: controller.signal,
                headers: authToken,
            })
                .then(res => res.json())
                .then(data => setData(data.lista))
                .catch(err => console.log(err));
        }

        switch (route.type) {
            case 'bus':
                authToken = {apikey: token};
                getData(import.meta.env.VITE_BUS_URL);
                break;
            case 'taxi':
                authToken = {Authorization: `Bearer ${token}`};
                getData('/api/taxis');
                break;
        }

        return () => {
            controller.abort();
        }
    }, [route, token, resource]);

    return data || [];
}