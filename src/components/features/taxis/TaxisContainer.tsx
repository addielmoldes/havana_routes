import RouteList from "@/components/features/RouteList.tsx";
import taxiRoutes from "@/utils/routes/taxi-routes.json";

export default function TaxisContainer() {

    return (
        <div className="overflow-auto">
            <div className="px-3">
                <RouteList routes={taxiRoutes}/>
            </div>
        </div>
    )
}
