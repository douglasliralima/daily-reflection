import { AppMenu, MenuContext } from "@/components/Menu"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { useState } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "../global.css"

const queryClient = new QueryClient()

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <MenuContext.Provider
            value={{
              openMenu: () => setMenuOpen(true),
              closeMenu: () => setMenuOpen(false),
            }}
          >
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#0a0a0a",
                },
                headerTintColor: "#fff",
                headerShadowVisible: false,
                contentStyle: {
                  backgroundColor: "#0a0a0a",
                },
              }}
            />

            <AppMenu
              open={menuOpen}
              closeMenu={() => setMenuOpen(false)}
            />
          </MenuContext.Provider>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
