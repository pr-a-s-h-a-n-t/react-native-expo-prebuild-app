import {ImageBackground, Pressable, ScrollView, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {GalleryPreviewData} from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import AppGradient from "@/components/AppGradient";
import AntDesign from '@expo/vector-icons/AntDesign';


const AffirmationPractice = () => {
    const {itemId} = useLocalSearchParams();
    const [affirmations, setAffirmations] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        if (!itemId) return;
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationData.find((a) => a.id === Number(itemId));
            if (affirmationToStart) {
                setAffirmations(affirmationToStart);

                const affirmationArray = affirmationToStart.text.split(".");

                // Remove the last item which is empty string
                if (affirmationArray[affirmationArray.length - 1] === "") {
                    affirmationArray.pop();
                }

                setSentences(affirmationArray);

                return;
            }
        }
    }, [itemId])

    return (
        <View className={"flex-1"}>
            <ImageBackground
                className={"flex-1"}
                source={affirmations?.image} resizeMode={"cover"}>
                <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
                    <Pressable onPress={() => router.back()} className={"absolute top-16 left-6 z-10"}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </Pressable>
                    <ScrollView className={"mt-40"} showsVerticalScrollIndicator={false}>
                        <View className={"h-full justify-center"}>
                            <View className={"h-4/5 justify-center"}>
                                {
                                    sentences.map((s, index) => (
                                        <Text key={index}
                                              className={"text-white text-3xl mb-12 font-bold text-center"}>{s}.</Text>
                                    ))
                                }
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default AffirmationPractice;