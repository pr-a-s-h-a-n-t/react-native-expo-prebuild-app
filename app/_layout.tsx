import {SplashScreen, Stack} from "expo-router";
import React, {useEffect} from "react";
import {useFonts} from "expo-font";
import TimerProvider from "@/contex/TimerContext";

// This will Prevent the splash screen from auto hide
SplashScreen.preventAutoHideAsync();

function RootLayout() {

    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) return null;
    if (!fontsLoaded && !error) return null;

    return (
        <TimerProvider>
            <Stack>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="(tabs)"
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="index"
                />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="meditate/[id]"
                />
                <Stack.Screen
                    options={{headerShown: false, presentation: "modal"}}
                    name="(modal)/adjust-meditation-duration"
                />
            </Stack>
        </TimerProvider>
    )
}

export default RootLayout;
