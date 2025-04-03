import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
import {ChangeEvent, KeyboardEvent, RefObject, useContext, useEffect, useRef, useState} from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {SearchContext, SectionContext} from "@/shared/contexts.ts";
import {Section} from "@/types";
import {Input} from "@/components/ui/input.tsx";

export default function HeaderContainer({setSearch}: { setSearch: (search: string) => void }) {
    const search = useContext(SearchContext);
    const section: Section = useContext<Section>(SectionContext);
    const [showSearch, setShowSearch] = useState(false);
    const inputRef: RefObject<null | HTMLInputElement> = useRef(null);


    // TODO: Replace with I18n
    let sectionTitle: string = 'Ruteros';
    if (section === 'taxis') {
        sectionTitle = 'Ruteros';
    } else if (section === 'buses') {
        sectionTitle = 'Ómnibus';
    } else if (section === 'settings') {
        sectionTitle = 'Ajustes';
    }

    useEffect(() => {
        if (showSearch) {
            inputRef.current?.focus();
        }
    });

    function handleClick() {
        setShowSearch(value => !value);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            setShowSearch(false);
        }
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <div className="flex flex-col gap-2 p-3">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">{sectionTitle}</h1>
                {section !== 'settings' &&
                    (<Button
                        variant="ghost"
                        size="icon"
                        className="ms-auto"
                        onClick={handleClick}
                    >
                        <Search/>
                    </Button>)
                }
            </div>
            {showSearch && (
                <Input
                    ref={inputRef}
                    type="search"
                    placeholder="Buscar"
                    value={search}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}/>
            )}

            {!showSearch && search && (
                <div className="text-muted-foreground">
                    Búsqueda: <Badge variant="secondary">{search}</Badge>
                </div>
            )}
        </div>
    )
}