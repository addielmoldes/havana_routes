import {useState, ReactNode, Dispatch, SetStateAction} from "react";
import {Section} from "@/types";
import {SectionContext} from "@/shared/contexts.ts";

export type SectionProvider = {
    section: Section;
    setSection: Dispatch<SetStateAction<Section>>;
}

export default function SectionProvider({children}: { children: ReactNode }) {
    const [section, setSection] = useState<Section>('taxis');

    return (
        <SectionContext.Provider value={{section, setSection}}>
            {children}
        </SectionContext.Provider>
    )
}