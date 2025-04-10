import {VehicleRoute} from "@/types";
import {Search} from 'lucide-react';
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useContext, useMemo} from "react";
import {RouteContext, SearchContext, SectionContext} from "@/shared/contexts.ts";
import CardOptions from "@/components/layout/CardOptions.tsx";

export default function RouteList({routes}: { routes: VehicleRoute[] }) {
    const searchQuery: string = useContext<string>(SearchContext)
    const {setSection} = useContext(SectionContext);
    const {setRoute} = useContext(RouteContext);

    const filteredRoutes: VehicleRoute[] = useMemo(() => {
        return searchQuery ?
            routes.filter((vehicle: VehicleRoute) => vehicle.code.includes(searchQuery.toUpperCase())) :
            routes
    }, [searchQuery, routes]);

    function handleClick(vehicle: VehicleRoute) {
        setRoute(vehicle);
        setSection('map');
    }

    const routeCards = filteredRoutes.map((vehicle: VehicleRoute) =>
        <Card
            key={vehicle.code}
            className="mb-2 relative py-3"
            onClick={() => handleClick(vehicle)}
        >
            <CardHeader className="px-3">
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