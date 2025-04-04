import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
import {ChangeEvent, KeyboardEvent, RefObject, useContext, useEffect, useRef, useState} from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {RouteContext, SearchContext, SectionContext} from "@/shared/contexts.ts";
import {Input} from "@/components/ui/input.tsx";

export default function HeaderContainer({setSearch}: { setSearch: (search: string) => void }) {
    const search = useContext(SearchContext);
    const {section} = useContext(SectionContext);
    const {route} = useContext(RouteContext);
    const [showSearch, setShowSearch] = useState(false);
    const inputRef: RefObject<null | HTMLInputElement> = useRef(null);

    let header: string;
    switch (section) {
        case 'buses':
            header = 'Ómnibus';
            break;
        case 'settings':
            header = 'Ajustes';
            break;
        case 'map':
            header = `Ruta ${route.code}`;
            break;
        default:
            header = 'Ruteros';
    }

    useEffect(() => {
        if (showSearch) {
            inputRef.current?.focus();
        }
    }, [showSearch]);

    function handleClick() {
        setShowSearch(value => !value);
    }

    function handleOnBlur() {
        setShowSearch(false);
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
            <div className="flex justify-between items-center h-[36px]">
                <h1 className="font-bold text-2xl">{header}</h1>
                {!['settings', 'map'].includes(section) &&
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
                    onBlur={handleOnBlur}
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