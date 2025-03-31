import HeaderContainer from './HeaderContainer.tsx'
import TaxisContainer from "@/components/features/taxis/TaxisContainer.tsx";
import BusesContainer from "@/components/features/buses/BusesContainer.tsx";
import SettingsContainer from "@/components/features/settings/SettingsContainer.tsx";
import {useContext, useState} from "react";
import {SearchContext, SectionContext} from "@/lib/contexts.ts";
import {Section} from "@/types";

export default function Main() {
    const [search, setSearch] = useState('');
    const section: Section = useContext(SectionContext);

    return (
        <main className="grow flex flex-col overflow-hidden">
            <SearchContext value={search}>
                <HeaderContainer setSearch={setSearch}/>

                {section === 'taxis' && <TaxisContainer/>}
                {section === 'buses' && <BusesContainer/>}
                {section === 'settings' && <SettingsContainer/>}
            </SearchContext>
        </main>
    );
}
