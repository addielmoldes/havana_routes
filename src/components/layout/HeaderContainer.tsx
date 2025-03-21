import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {Badge} from "@/components/ui/badge.tsx";

export default function HeaderContainer({section, searchQuery, setSearchQuery}: {
    section: string,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void
}) {
    const [showSearch, setShowSearch] = useState(false);

    let sectionTitle: string = 'Ruteros';
    if (section === 'taxis') {
        sectionTitle = 'Ruteros';
    } else if (section === 'buses') {
        sectionTitle = 'Buses activos';
    } else if (section === 'settings') {
        sectionTitle = 'Ajustes';
    }

    function handleClick() {
        setShowSearch(value => !value);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            setShowSearch(false);
        }
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(event.target.value);
    }

    return (
        <div className="flex flex-col gap-2 p-3">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">{sectionTitle}</h1>
                <Button
                    variant="ghost"
                    size="icon"
                    className="ms-auto"
                    onClick={handleClick}
                >
                    <Search/>
                </Button>
            </div>
            {showSearch && (
                <Input
                    type="search"
                    placeholder="Buscar"
                    value={searchQuery}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}/>
            )}

            {!showSearch && searchQuery && (
                <div className="text-muted-foreground">Búsqueda: <Badge variant="secondary">{searchQuery}</Badge></div>
            )}
        </div>
    )
}