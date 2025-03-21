import HeaderContainer from './HeaderContainer.tsx'
import TaxisContainer from "@/components/features/taxis/TaxisContainer.tsx";
import BusesContainer from "@/components/features/buses/BusesContainer.tsx";
import SettingsContainer from "@/components/features/settings/SettingsContainer.tsx";
import {useState} from "react";

function Main({section}: { section: string }) {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main className="grow flex flex-col overflow-hidden">
            <HeaderContainer section={section} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            {section === 'taxis' && <TaxisContainer searchQuery={searchQuery}/>}
            {section === 'buses' && <BusesContainer searchQuery={searchQuery}/>}
            {section === 'settings' && <SettingsContainer/>}
        </main>
    );
}

export default Main;