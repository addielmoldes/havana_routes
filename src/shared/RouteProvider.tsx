import {useState, ReactNode, Dispatch, SetStateAction} from "react";
import {RouteContext} from "@/shared/contexts.ts";
import {VehicleRoute} from "@/types";

export type RouteProvider = {
    route: VehicleRoute;
    setRoute: Dispatch<SetStateAction<VehicleRoute>>;
}

export default function RouteProvider({children}: { children: ReactNode }) {
    const noRoute: VehicleRoute = {
        code: '',
        route: '',
        type: 'taxi',
    };
    const [route, setRoute] = useState(noRoute);

    return (
        <RouteContext.Provider value={{route, setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}