import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Drawer } from "expo-router/drawer"
import { Menu } from "lucide-react-native"
import { Platform, Pressable, Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "../global.css"

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <Drawer
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#0a0a0a",
              },
              headerTintColor: "#ffffff",
              headerShadowVisible: false,

              drawerStyle: {
                backgroundColor: "#050505",
              },
              drawerActiveTintColor: "#ffffff",
              drawerInactiveTintColor: "#9ca3af",

              drawerType: "slide",
              swipeEnabled: Platform.OS !== "web",

              overlayColor: "rgba(0,0,0,0.45)",

              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.toggleDrawer()}
                  style={{ marginLeft: 14, padding: 4 }}
                  hitSlop={10}
                >
                  <Menu size={22} color="white" />
                </Pressable>
              ),

              headerRight: () => (
                <Pressable
                  onPress={() => console.log("Enter")}
                  style={{
                    marginRight: 14,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 10,
                    backgroundColor: "#171717",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      fontWeight: "700",
                    }}
                  >
                    Enter
                  </Text>
                </Pressable>
              ),
            })}
          >
            <Drawer.Screen
              name="index"
              options={{
                title: "",
                drawerLabel: "New Reflection",
              }}
            />
            <Drawer.Screen
              name="history"
              options={{
                title: "History",
                drawerLabel: "History",
              }}
            />
          </Drawer>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
