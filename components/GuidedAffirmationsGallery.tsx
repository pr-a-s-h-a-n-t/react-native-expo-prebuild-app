import {FlatList, Image, Pressable, Text, View} from "react-native";
import {GalleryPreviewData} from "@/constants/models/AffirmationCategory";
import {Link} from "expo-router";

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
                                       title,
                                       previews,
                                   }: GuidedAffirmationsGalleryProps) => {
    return (
        <View className={"my-5"}>
            <View className={"mb-2"}>
                <Text className={"text-white font-bold text-xl"}>{title}</Text>
            </View>
            <View className={"space-y-2"}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width: 14}}/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName={"gap-x-"}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({item}) => (
                        <Link
                            href={`/affirmations/${item.id}`}
                            asChild>
                            <Pressable className={"h-36 w-32 rounded-md"}>
                                <Image
                                    source={item.image}
                                    resizeMode={"cover"}
                                    className={"w-full h-full"}
                                />

                            </Pressable>
                        </Link>
                    )}
                    horizontal
                    data={previews}/>
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery;