import RouteList from '../RouteList.tsx'
import {Tabs, TabsTrigger, TabsContent, TabsList} from "@/components/ui/tabs.tsx";
import {mainRoutes} from "@/utils/main-routes.ts";
import {supplierRoutes} from "@/utils/supplier-routes.ts";
import {secondaryRoutes} from "@/utils/secondary-routes.ts";

export default function BusesContainer() {

    return (
        <Tabs defaultValue="mainRoutes" className="h-[100%] overflow-hidden">
            <div className="px-3">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mainRoutes" className="[state:active]:text-foreground">Principales</TabsTrigger>
                    <TabsTrigger value="supplierRoutes">Alimentadoras</TabsTrigger>
                    <TabsTrigger value="otherRoutes">Secundarias</TabsTrigger>
                </TabsList>
            </div>
            <div className="overflow-auto">
                <TabsContent value="mainRoutes" className="px-3">
                    <RouteList routes={mainRoutes}/>
                </TabsContent>

                <TabsContent value="supplierRoutes" className="px-3">
                    <RouteList routes={supplierRoutes}/>
                </TabsContent>

                <TabsContent value="otherRoutes" className="px-3">
                    <RouteList routes={secondaryRoutes}/>
                </TabsContent>
            </div>
        </Tabs>
    );
}