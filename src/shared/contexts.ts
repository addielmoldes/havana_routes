import {createContext} from "react";
import {ThemeProviderState} from "@/utils/theme-provider.tsx";
import {SectionProvider} from "@/shared/SectionProvider.tsx";
import {RouteProvider} from "@/shared/RouteProvider.tsx";

export const ThemeProviderContext = createContext<ThemeProviderState>({
    theme: 'system',
    setTheme: () => null,
});

export const SearchContext = createContext<string>('');

export const SectionContext = createContext<SectionProvider>({
    section: 'taxis',
    setSection: () => null
});

export const RouteContext = createContext<RouteProvider>({
    route: {
        id: 1,
        ruta: "P1",
        origen: "LA ROSITA",
        destino: "PLAYA",
        id_terminal: 2,
        red: 0,
        type: 'bus'
    },
    setRoute: () => null
})

export const AuthContext = createContext<string>('');