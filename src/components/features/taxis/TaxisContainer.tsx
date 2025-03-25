import RouteList from "@/components/features/RouteList.tsx";
import {taxiRoutes} from "@/utils/taxi-routes.ts";

export default function TaxisContainer({searchQuery}: { searchQuery: string }) {
    console.log(searchQuery);

    return (
        <div className="overflow-auto">
            <div className="px-3">
                <RouteList routes={taxiRoutes} searchQuery={searchQuery}/>
            </div>
        </div>
    )
}
