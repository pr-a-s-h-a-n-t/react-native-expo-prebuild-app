import {Pressable, Text, View} from "react-native";
import AppGradient from "@/components/AppGradient";
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import {TimerContext} from "@/contex/TimerContext";
import {useContext} from "react";

const AdjustMeditationDuration = () => {

    const {setDuration} = useContext(TimerContext);
    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    }

    return (
        <View className={"flex-1 relative"}>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <Pressable
                    className={"absolute top-16 left-6 z-10"}
                    onPress={() => router.back()}>
                    <AntDesign name="leftcircleo" size={50} color="white"/>
                </Pressable>
                <View className={"mt-20 justify-center h-4/5"}>
                    <Text
                        className={"text-center font-bold text-3xl text-white mb-8"}>
                        Adjust Your Meditation
                        Durations
                    </Text>
                    <View>
                        <CustomButton
                            containerStyles={"mb-5"}
                            onPress={() => handlePress(10)}
                            title={"10 Seconds"}
                        />

                        <CustomButton
                            containerStyles={"mb-5"}
                            onPress={() => handlePress(5 * 60)}
                            title={"5 Minutes"}
                        />

                        <CustomButton
                            containerStyles={"mb-5"}
                            onPress={() => handlePress(10 * 60)}
                            title={"10 Minutes"}
                        />

                        <CustomButton
                            containerStyles={"mb-5"}
                            onPress={() => handlePress(15 * 60)}
                            title={"15 Minutes"}
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
    )
}

export default AdjustMeditationDuration;