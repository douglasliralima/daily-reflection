import { PROJECT_SCHEME, STORAGE_PREFIX } from "@/const";
import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    baseURL: "http://localhost:8080",
    plugins: [
        expoClient({
            scheme: PROJECT_SCHEME,
            storagePrefix: STORAGE_PREFIX,
            storage: SecureStore,
        })
    ]
});