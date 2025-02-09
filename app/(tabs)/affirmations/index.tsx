import {ScrollView, Text, View} from "react-native";
import AppGradient from "@/components/AppGradient";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

const Index = () => {
    return (
        <View className={"flex-1"}>
            <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className={"text-zinc-50 text-3xl font-bold"}>
                        Change your beliefs withy affirmations
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((gallery, index) => (
                            <GuidedAffirmationsGallery
                                key={gallery.title}
                                title={gallery.title}
                                previews={gallery.data}/>
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    )
}

export default Index