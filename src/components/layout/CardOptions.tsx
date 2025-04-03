import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Ellipsis, Heart, Signpost} from 'lucide-react'
import {MouseEvent} from "react";

export default function CardOptions() {

    function handleMenuAction(action: 'stations' | 'add_favorite' | 'remove_favourite') {
        console.log(action)
    }

    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Ellipsis className="text-accent"/>
                </DropdownMenuTrigger>

                <DropdownMenuContent collisionPadding={5}>
                    <DropdownMenuItem
                        onClick={(e: MouseEvent) => {
                            e.stopPropagation();
                            handleMenuAction('stations');
                        }}>
                        <Signpost/>
                        Ver paradas
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={(e: MouseEvent) => {
                            e.stopPropagation();
                            handleMenuAction('add_favorite');
                        }}>
                        <Heart/>
                        Añadir a Favoritos
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}