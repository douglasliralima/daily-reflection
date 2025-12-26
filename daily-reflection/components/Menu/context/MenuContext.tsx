import { createContext, useContext } from "react"

type MenuContextType = {
    openMenu: () => void
    closeMenu: () => void
}

export const MenuContext = createContext<MenuContextType | null>(null)

export function useMenu() {
    const ctx = useContext(MenuContext)
    if (!ctx) {
        throw new Error("useMenu must be used inside MenuContext.Provider")
    }
    return ctx
}
