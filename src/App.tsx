import NavBottomBar from "@/components/layout/NavBottomBar.tsx";
import Main from "@/components/layout/Main.tsx";
import {ThemeProvider} from "@/utils/theme-provider.tsx";
import SectionProvider from "@/shared/SectionProvider.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function App() {

    return (
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
            <SectionProvider>
                <Main/>
                <NavBottomBar/>
            </SectionProvider>

            <Toaster/>

            <Dialog defaultOpen={true}>
                <DialogContent className="z-[999999999]">
                    <DialogHeader>
                        <DialogTitle>Atención</DialogTitle>
                    </DialogHeader>
                    <div>
                        <div className="mb-2 text-center font-bold">ESTA APP SE ENCUENTRA EN DESARROLLO</div>
                        <p>
                            <strong>Por cuestiones ajenas al desarrollador</strong>, es posible que la información de
                            las rutas en tiempo real no esté disponible.
                        </p>
                        <br/>
                        <p>
                            El sitio, que provee la información de las rutas, del cual se nutre esta aplicación posee un
                            certificado inválido, por lo tanto el navegador bloqueará (por defecto) las solicitudes a
                            dicho sitio.
                        </p>
                        <br/>
                        <p>
                            <strong>¿Qué hacer?</strong>
                            <br/>
                            Si tu navegador lo permite, añade una excepción de seguridad al sitio:&nbsp;
                            <code>https://am.transnet.cu</code>
                        </p>
                    </div>
                    <DialogFooter>
                        <DialogClose className="">
                            <Button variant="outline">Entiendo</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}
