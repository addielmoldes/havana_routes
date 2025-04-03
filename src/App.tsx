import NavBottomBar from "@/components/layout/NavBottomBar.tsx";
import Main from "@/components/layout/Main.tsx";
import {ThemeProvider} from "@/utils/theme-provider.tsx";
import {useState} from "react";
import {SectionContext} from "@/shared/contexts.ts";
import {Section} from "@/types";

export default function App() {
    const [section, setSection] = useState<Section>('taxis');

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <SectionContext value={section}>
                <Main/>
                <NavBottomBar setSection={setSection}/>
            </SectionContext>
        </ThemeProvider>
    )
}
