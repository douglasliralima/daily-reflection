import { useRouter } from "expo-router"
import {
  History,
  LogIn,
  PlusCircle,
} from "lucide-react-native"
import { useEffect, useMemo } from "react"
import {
  Modal,
  Pressable,
  View,
  useWindowDimensions,
} from "react-native"
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import MenuItem from "./components/MenuItem"

type Props = {
  open: boolean
  closeMenu: () => void
}

export default function AppMenu({ open, closeMenu }: Props) {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const x = useSharedValue(-width)

  const items = useMemo(
    () => [
      {
        label: "New Reflection",
        icon: PlusCircle,
        action: () => router.push({ pathname: "/" }),
      },
      {
        label: "History",
        icon: History,
        action: () => router.push({ pathname: "/history" }),
      },
    ],
    [router]
  )

  useEffect(() => {
    x.value = withTiming(open ? 0 : -width, {
      duration: open ? 260 : 220,
      easing: open
        ? Easing.out(Easing.cubic)
        : Easing.in(Easing.cubic),
    })
  }, [open, width, x])

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }))

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        x.value = Math.max(-width, e.translationX)
      }
    })
    .onEnd((e) => {
      const shouldClose =
        e.velocityX < -500 || x.value < -width / 2

      if (shouldClose) {
        closeMenu()
      } else {
        x.value = withTiming(0, {
          duration: 200,
          easing: Easing.out(Easing.cubic),
        })
      }
    })

  return (
    <Modal
      visible={open}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={closeMenu}
    >
      <View className="flex-1 bg-neutral-900">
        <Pressable
          className="absolute inset-0"
          onPress={closeMenu}
        />

        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              style,
              {
                position: "absolute",
                left: 0,
                top: 0,
                width,
                height: "100%",
              },
            ]}
            className="bg-neutral-950 px-4 pt-14"
          >
            <View className="gap-2 mt-4">
              {items.map((item) => (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  onPress={() => {
                    closeMenu()
                    item.action()
                  }}
                />
              ))}
            </View>

            <View className="mt-8 border-t border-neutral-800 pt-6">
              <MenuItem
                label="Enter"
                icon={LogIn}
                onPress={closeMenu}
              />
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </Modal>
  )
}
