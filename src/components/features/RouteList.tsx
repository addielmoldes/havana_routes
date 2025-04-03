import {VehicleRoute} from "@/types";
import {Search} from 'lucide-react';
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useContext} from "react";
import {SearchContext} from "@/shared/contexts.ts";
import CardOptions from "@/components/layout/CardOptions.tsx";

export default function RouteList({routes}: { routes: VehicleRoute[] }) {

    const searchQuery: string = useContext<string>(SearchContext)

    const filteredRoutes: VehicleRoute[] = searchQuery ? routes.filter((vehicle: VehicleRoute) => {
        return vehicle.code.includes(searchQuery.toUpperCase());
    }) : routes;

    const routeCards = filteredRoutes.map((vehicle: VehicleRoute) =>
        <Card
            key={vehicle.code}
            className="mb-2 relative"
            onClick={() => console.log('mapa')}
        >
            <CardHeader>
                <CardTitle>{vehicle.code}</CardTitle>
                <CardDescription>{vehicle.route}</CardDescription>
            </CardHeader>

            <CardOptions/>
        </Card>
    );

    return (
        <>
            {routeCards.length ? routeCards : (
                <div className="flex flex-col items-center text-muted-foreground text-2xl my-6">
                    <Search className="w-7 h-7"/>
                    No se encontraron rutas
                </div>
            )}
        </>
    );
}