import NavBottomBar from "@/components/layout/NavBottomBar.tsx";
import Main from "@/components/layout/Main.tsx";
import {ThemeProvider} from "@/utils/theme-provider.tsx";
import {useState} from "react";

function App() {
    const [section, setSection] = useState<string>('taxis');

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <Main section={section}/>
            <NavBottomBar section={section} setSection={setSection}/>
        </ThemeProvider>
    )
}

export default App
