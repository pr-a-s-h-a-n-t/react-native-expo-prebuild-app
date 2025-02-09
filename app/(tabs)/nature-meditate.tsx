import {FlatList, ImageBackground, Pressable, Text, View} from "react-native";
import AppGradient from "@/components/AppGradient";
import {StatusBar} from "expo-status-bar";
import {MEDITATION_DATA} from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import {LinearGradient} from "expo-linear-gradient";
import {router} from "expo-router";

const NatureMeditate = () => {
    return (
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
            <View className={"mb-6"}>
                <Text
                    className={"text-gray-200 mb-3 font-bold  text-left text-4xl"}
                >Welcome Prashant
                </Text>
                <Text
                    className={"text-indigo-100 justify-center text-xl font-medium"}
                >Start Your Meditation Practice Today
                </Text>
            </View>
            <View>
                <FlatList
                    data={MEDITATION_DATA}
                    renderItem={({item}) => (
                        <Pressable
                            className={"h-48 my-3 rounded-md overflow-hidden"}
                            onPress={() => router.push(`/meditate/${item.id}`)}>
                            <ImageBackground
                                resizeMode={"cover"}
                                className={"flex-1 rounded-lg justify-center"}
                                source={MEDITATION_IMAGES[item.id - 1]}>
                                <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]}
                                                className={"flex-1 justify-center items-center"}>
                                    <Text className={"text-gray-100 font-bold text-3xl text-center"}>{item.title}</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Pressable>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    className={"mb-20"}/>
            </View>
        </AppGradient>
    )
}

export default NatureMeditate;