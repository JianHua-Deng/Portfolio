"use client";

import React, { createContext, useContext, useState } from 'react'
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProps = {children : React.ReactNode};
type ActiveSectionContextType = {
    activeSection: SectionName, setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>, timeofLastClicked: number, setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children, } : ActiveSectionContextProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeofLastClicked, setTimeofLastClick] = useState(0);// Keeping track of this to disable the observer temporarily when user clicks on a link
    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeofLastClicked,
            setTimeofLastClick,
        }}>{children}</ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if (context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context
}