import {Button} from '@/components/ui/button.tsx'
import {CarFront, BusFront, Settings} from 'lucide-react'
import {Section} from "@/types";
import useSection from "@/hooks/useSection.ts";

export default function NavBottomBar() {

    const {section, setSection} = useSection();

    const handleClick = (section: Section) => {
        setSection(section);
    }
    return (
        <>
            <nav className="flex justify-around items-center p-3 border-t bg-background">
                <Button
                    variant="ghost"
                    size="icon"
                    className={`flex flex-col items-center ${section === 'taxis' ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => handleClick('taxis')}
                >
                    <CarFront className="h-6 w-6"/>
                    <span className="text-xs mt-0">Ruteros</span>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className={`flex flex-col items-center ${section === 'buses' ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => handleClick('buses')}
                >
                    <BusFront className="h-6 w-6"/>
                    <span className="text-xs mt-0">Ómnibus</span>
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className={`flex flex-col items-center ${section === 'settings' ? 'text-primary' : 'text-muted-foreground'}`}
                    onClick={() => handleClick('settings')}
                >
                    <Settings className="h-6 w-6"/>
                    <span className="text-xs mt-0">Ajustes</span>
                </Button>
            </nav>
        </>
    )
}