import {routes} from '@/assets/rutas'
import {Card, CardHeader, CardTitle} from '@/components/ui/card'
import {Tabs, TabsTrigger, TabsContent, TabsList} from "@/components/ui/tabs";

function BusesContainer() {

    const mainRoutes = Object.groupBy(
        routes.filter(route => route.ruta.at(0) === 'P'),
        route => route.ruta
    );

    const supplierRoutes = Object.groupBy(
        routes.filter(route => route.ruta.at(0) === 'A'),
        route => route.ruta
    );

    const otherRoutes = Object.groupBy(
        routes.filter(route => route.ruta.at(0) !== 'P' && route.ruta.at(0) !== 'A'),
        route => route.ruta
    );

    const mainRoutesCards = Object.keys(mainRoutes).map((route: string) =>
        <Card
            key={route}
            className="mb-2"
            onClick={() => console.log('mapa')}
        >
            <CardHeader>
                <CardTitle>Ruta {route}</CardTitle>
            </CardHeader>
        </Card>
    );

    const supplierRoutesCards = Object.keys(supplierRoutes).map((route: string) =>
        <Card
            key={route}
            className="mb-2"
            onClick={() => console.log('mapa')}
        >
            <CardHeader>
                <CardTitle>Ruta {route}</CardTitle>
            </CardHeader>
        </Card>
    );

    const otherRoutesCards = Object.keys(otherRoutes).map((route: string) =>
        <Card
            key={route}
            className="mb-2"
            onClick={() => console.log('mapa')}
        >
            <CardHeader>
                <CardTitle>Ruta {route}</CardTitle>
            </CardHeader>
        </Card>
    );

    return (
        <div className="p-3">
            <Tabs defaultValue="mainRoutes">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mainRoutes" className="[state:active]:text-foreground">Principales</TabsTrigger>
                    <TabsTrigger value="supplierRoutes">Alimentadoras</TabsTrigger>
                    <TabsTrigger value="otherRoutes">Otras</TabsTrigger>
                </TabsList>
                <TabsContent value="mainRoutes">
                    {mainRoutesCards}
                </TabsContent>

                <TabsContent value="supplierRoutes">
                    {supplierRoutesCards}
                </TabsContent>

                <TabsContent value="otherRoutes">
                    {otherRoutesCards}
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default BusesContainer;