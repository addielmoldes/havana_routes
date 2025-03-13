import TaxisContainer from "@/components/TaxisContainer";
import BusesContainer from "@/components/BusesContainer";
import SettingsContainer from "@/components/SettingsContainer";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";
import {useState} from "react";
import {Input} from "@/components/ui/input.tsx";

function Main({section}: { section: string }) {
    let sectionTitle: string = 'Ruteros';
    if (section === 'taxis') {
        sectionTitle = 'Ruteros';
    } else if (section === 'buses') {
        sectionTitle = 'Buses activos';
    } else if (section === 'settings') {
        sectionTitle = 'Ajustes';
    }

    const [searchInput, showSearchInput] = useState(false);

    return (
        <main className="grow overflow-auto">
            <div className="flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">{sectionTitle}</h1>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="ms-auto"
                        onClick={() => showSearchInput(true)}
                    >
                        <Search/>
                    </Button>
                </div>
                {searchInput && <Input type="search" placeholder="Buscar" onBlur={() => showSearchInput(false)}/>}
            </div>
            {section === 'taxis' && <TaxisContainer/>}
            {section === 'buses' && <BusesContainer/>}
            {section === 'settings' && <SettingsContainer/>}
        </main>
    );
}

export default Main;