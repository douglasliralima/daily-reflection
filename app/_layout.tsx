import { ModalBoxProvider } from "@/context/ModalContext"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { Stack } from "expo-router"
import "../global.css"

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <ModalBoxProvider>
            <BottomSheetModalProvider>
              <Stack screenOptions={{ headerShown: false }} />
            </BottomSheetModalProvider>
          </ModalBoxProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider >
  )
}
