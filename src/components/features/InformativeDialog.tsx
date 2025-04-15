import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";

export default function InformativeDialog() {
    return (
        <Dialog defaultOpen={true}>
            <DialogContent className="z-[999999999]" onOpenAutoFocus={e => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Atención</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="mb-2 font-bold">ESTA APP SE ENCUENTRA EN DESARROLLO</div>
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
                        Si tu navegador lo permite, añade una excepción de seguridad al sitio:
                        <br/>
                        <code>https://am.transnet.cu</code>
                    </p>
                </div>
                <DialogFooter>
                    <DialogClose>Entiendo</DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}