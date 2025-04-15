import HeaderContainer from './HeaderContainer.tsx'
import TaxisContainer from "@/components/features/taxis/TaxisContainer.tsx";
import BusesContainer from "@/components/features/buses/BusesContainer.tsx";
import SettingsContainer from "@/components/features/settings/SettingsContainer.tsx";
import {useContext, useState} from "react";
import {SearchContext, SectionContext} from "@/shared/contexts.ts";
import MapSection from "@/components/features/map/MapSection.tsx";
import RouteProvider from "@/shared/RouteProvider.tsx";
import TokenProvider from "@/shared/TokenProvider.tsx";

export default function Main() {
    const [search, setSearch] = useState('');
    const {section} = useContext(SectionContext);

    return (
        <main className="grow flex flex-col overflow-hidden">
            <SearchContext value={search}>
                <RouteProvider>
                    <HeaderContainer setSearch={setSearch}/>

                    <TokenProvider>
                        {section === 'taxis' && <TaxisContainer/>}
                        {section === 'buses' && <BusesContainer/>}
                        {section === 'settings' && <SettingsContainer/>}
                        {section === 'map' && <MapSection/>}
                    </TokenProvider>
                </RouteProvider>
            </SearchContext>
        </main>
    );
}
