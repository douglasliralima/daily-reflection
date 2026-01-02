import { SocialSignInButton } from "@/app/(auth)/signin/components/SocialSignInButton";
import { PROJECT_SCHEME } from "@/const";
import { authClient } from "@/lib/auth-client";
import { router } from "expo-router";
import { Apple, ArrowLeft, Facebook, Key } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function SignInPage() {
    const [loading, setLoading] = useState(false);

    const handleSocialSignIn = async (
        provider: "google" | "facebook" | "apple"
    ) => {
        await authClient.signIn.social(
            {
                provider,
                callbackURL: `${PROJECT_SCHEME}://`,
            },
            {
                onRequest: () => setLoading(true),
                onResponse: () => setLoading(false),
            }
        );
    };

    return (
        <View className="flex-1 items-center justify-center bg-black px-4">
            <View className="absolute left-4 top-4 z-10">
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) {
                            router.back();
                        } else {
                            router.replace("/");
                        }
                    }}
                    hitSlop={10}
                >
                    <ArrowLeft size={22} color="#e5e5e5" />
                </Pressable>
            </View>

            <View className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <View className="mb-4">
                    <Text className="text-lg font-semibold text-neutral-100">
                        Sign In
                    </Text>
                    <Text className="mt-1 text-xs text-neutral-400">
                        Enter your email below to login to your account
                    </Text>
                </View>

                <View className="gap-3">
                    <SocialSignInButton
                        label="Sign in with Google"
                        loading={loading}
                        onPress={() => handleSocialSignIn("google")}
                        icon={<Key size={16} color="#e5e5e5" />}
                    />

                    <SocialSignInButton
                        label="Sign in with Facebook"
                        loading={loading}
                        onPress={() => handleSocialSignIn("facebook")}
                        icon={<Facebook size={16} color="#1877F2" />}
                    />

                    <SocialSignInButton
                        label="Sign in with Apple"
                        loading={loading}
                        onPress={() => handleSocialSignIn("apple")}
                        icon={<Apple size={16} color="#e5e5e5" />}
                    />
                </View>
            </View>
        </View>
    );
}
