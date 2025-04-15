import NavBottomBar from "@/components/layout/NavBottomBar.tsx";
import Main from "@/components/layout/Main.tsx";
import {ThemeProvider} from "@/utils/theme-provider.tsx";
import SectionProvider from "@/shared/SectionProvider.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import InformativeDialog from "@/components/features/InformativeDialog.tsx";

export default function App() {

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <SectionProvider>
                <Main/>
                <NavBottomBar/>
            </SectionProvider>

            <Toaster/>
            <InformativeDialog/>
        </ThemeProvider>
    )
}
