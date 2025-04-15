import RouteList from '../RouteList.tsx'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import mainRoutes from "@/utils/routes/main-routes.json";
import supplierRoutes from "@/utils/routes/supplier-routes.json";
import secondaryRoutes from "@/utils/routes/secondary-routes.json";
import {useContext} from "react";
import {BusTabContext} from "@/shared/contexts.ts";

export type BusTab = 'main' | 'supplier' | 'secondary'

export default function BusesContainer({setBusTab}: { setBusTab: (busTab: BusTab) => void }) {
    const busTab = useContext(BusTabContext);

    return (
        <Tabs
            defaultValue='main'
            className="h-[100%] overflow-hidden"
            value={busTab}
            onValueChange={value => setBusTab(value as BusTab)}
        >
            <div className="px-3">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="main" className="[state:active]:text-foreground">Principales</TabsTrigger>
                    <TabsTrigger value="supplier">Alimentadoras</TabsTrigger>
                    <TabsTrigger value="secondary">Secundarias</TabsTrigger>
                </TabsList>
            </div>
            <div className="overflow-auto">
                <TabsContent value="main" className="px-3">
                    <RouteList routes={mainRoutes}/>
                </TabsContent>

                <TabsContent value="supplier" className="px-3">
                    <RouteList routes={supplierRoutes}/>
                </TabsContent>

                <TabsContent value="secondary" className="px-3">
                    <RouteList routes={secondaryRoutes}/>
                </TabsContent>
            </div>
        </Tabs>
    );
}