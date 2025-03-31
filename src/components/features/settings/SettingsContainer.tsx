import ModeSelector from "@/components/features/settings/ModeSelector.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronRight} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";

export default function SettingsContainer() {
    return (
        <div className="p-3">
            <div className="flex justify-between items-center mb-3">
                <span className="text-xl">Modo</span>
                <ModeSelector/>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-xl grow">Intervalo de actualización</span>
                <Input type="number" value="4" className="w-20"/>
            </div>

            <div className="flex justify-between items-center mb-3">
                <span className="text-xl">Sobre Rutas Habana</span>
                <Button variant="ghost">
                    <ChevronRight/>
                </Button>
            </div>
        </div>
    )
}
