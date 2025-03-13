import NavBottomBar from "@/components/NavBottomBar";
import Main from "@/components/Main";
import {ThemeProvider} from "@/components/theme-provider.tsx";
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
