import ModeSelector from "@/components/features/settings/ModeSelector.tsx";

export default function SettingsContainer() {
    return (
        <div className="p-3">
            <div className="flex justify-between items-center mb-3">
                Modo
                <ModeSelector/>
            </div>
        </div>
    )
}
