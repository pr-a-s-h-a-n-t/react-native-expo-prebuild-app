import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import "../global.css"
import beachImage from '../assets/meditation-images/beach.webp';
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from "expo-linear-gradient"
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";
import AppGradient from "@/components/AppGradient";


export default function HomeScreen() {
    const router = useRouter();
    return (
        <View className="flex-1">
            <ImageBackground
                source={beachImage}
                resizeMode="cover"
                className="flex-1"
            >
                <AppGradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
                >
                    <SafeAreaView className="flex-1 px-1   justify-between">
                        <View>
                            <Text className="text-center text-white font-bold text-4xl mt-5">
                                Simple Mediation!
                            </Text>
                            <Text className="text-center text-white text-2xl text-regular mt-3">Simplifying Mediation
                                for Everyone</Text>
                        </View>
                        <View>
                            <CustomButton
                                onPress={() => router.push("/nature-meditate")}
                                title="Get Started"/>
                        </View>
                    </SafeAreaView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
}


