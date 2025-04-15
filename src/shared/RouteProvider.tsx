import {useState, ReactNode, Dispatch, SetStateAction} from "react";
import {RouteContext} from "@/shared/contexts.ts";
import {VehicleRoute} from "@/types";

export type RouteProvider = {
    route: VehicleRoute;
    setRoute: Dispatch<SetStateAction<VehicleRoute>>;
}

export default function RouteProvider({children}: { children: ReactNode }) {
    const noRoute: VehicleRoute = {
        id: 1,
        ruta: "P1",
        origen: "LA ROSITA",
        destino: "PLAYA",
        id_terminal: 2,
        red: 0,
        type: "bus"
    };
    const [route, setRoute] = useState(noRoute);

    return (
        <RouteContext.Provider value={{route, setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}