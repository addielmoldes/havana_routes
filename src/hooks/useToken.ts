import {useContext} from "react";
import {AuthContext} from "@/shared/contexts.ts";

export default function useToken() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useToken must be used within a AuthTokenProvider');
    }

    return context;
}