import {useContext} from "react";
import {SectionContext} from "@/shared/contexts.ts";
import {SectionProvider} from "@/shared/SectionProvider.tsx";

export default function useSection() {
    const context = useContext<SectionProvider>(SectionContext);

    if (context === undefined) {
        throw new Error('useSection must be used within a SectionProvider');
    }

    return context;
}