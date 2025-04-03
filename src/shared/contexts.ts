import {createContext} from "react";
import {Section} from "@/types";

export const SectionContext = createContext<Section>('taxis');

export const SearchContext = createContext('');
