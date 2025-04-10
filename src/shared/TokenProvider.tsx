import {AuthContext} from "@/shared/contexts.ts";
import {ReactNode, useEffect, useRef, useState} from "react";
import useSection from "@/hooks/useSection.ts";

export default function TokenProvider({children}: { children: ReactNode }) {
    const taxiToken = useRef(localStorage.getItem('access_token'));
    const busToken = useRef(import.meta.env.VITE_BUS_API_KEY);
    const {section} = useSection();
    const [token, setToken] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        if (section === 'taxis') {
            if (!taxiToken.current) {
                const consumerKey = import.meta.env.VITE_CONSUMER_KEY;
                const consumerSecret = import.meta.env.VITE_CONSUMER_SECRET;

                fetch('/api/taxi/auth', {
                    method: 'POST',
                    signal: controller.signal,
                    headers: {
                        'Authorization': `Basic ${btoa(consumerKey + ':' + consumerSecret)}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        'grant_type': 'client_credentials'
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('access_token', data.access_token);
                        setToken(data.access_token);
                    })
                    .catch(error => console.error(error));
            } else {
                setToken(taxiToken.current);
            }
        } else if (section === 'buses') {
            setToken(busToken.current);
        }

        return () => {
            controller.abort();
        }
    }, [section]);

    return (
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    )
}