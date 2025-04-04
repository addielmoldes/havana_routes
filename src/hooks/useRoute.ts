import {useContext} from "react";
import {RouteContext} from "@/shared/contexts.ts";
import {RouteProvider} from "@/shared/RouteProvider.tsx";

export default function useRoute() {
    const context = useContext<RouteProvider>(RouteContext);

    if (context === undefined) {
        throw new Error('useRoute must be used within a RouteProvider');
    }

    return context;
}