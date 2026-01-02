import { router } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { Menu } from "lucide-react-native"
import { Platform, Pressable, Text } from "react-native"

export default function AppLayout() {
    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: "#171717",
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
                        onPress={() => router.push("/signin")}
                        style={{
                            marginRight: 14,
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 10,
                        }}
                        hitSlop={10}
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
                )
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
    )
}
