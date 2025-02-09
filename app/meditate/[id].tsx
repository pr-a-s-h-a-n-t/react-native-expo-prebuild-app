import {BackHandler, ImageBackground, Pressable, Text, View} from "react-native";
import MeditationImages from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import AntDesign from '@expo/vector-icons/AntDesign';
import {router, useLocalSearchParams} from "expo-router";
import CustomButton from "@/components/CustomButton";
import {useContext, useEffect, useRef, useState} from "react";
import {Audio} from "expo-av";
import {AUDIO_FILES, MEDITATION_DATA} from "@/constants/MeditationData";
import {TimerContext} from "@/contex/TimerContext";

const Meditate = () => {

    const {id} = useLocalSearchParams();
    const {duration: secondsRemaining, setDuration} = useContext(TimerContext);

    const audioRef = useRef<Audio.Sound | null>(null);

    // const [secondsRemaining, setSecondsRemaining] = useState<number>(10);
    const [isMeditating, setIsMeditating] = useState<boolean>(false);
    const [audioSound, setAudioSound] = useState<Audio.Sound>();
    const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);


    useEffect(() => {
        if (!isMeditating) return;

        if (secondsRemaining === 0) {
            setIsMeditating(false);
            setDuration(10); // Reset timer

            // Stop audio when timer resets
            if (audioRef.current) {
                audioRef.current.stopAsync();
            }
            setIsPlayingAudio(false);

            return;
        }

        const timerId = setTimeout(() => {
            setDuration(secondsRemaining - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [secondsRemaining, isMeditating]);


    useEffect(() => {

        BackHandler.addEventListener("hardwareBackPress", handleBackPress);

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
        };
    }, [audioSound]);

    const handleBackPress = async () => {
        setIsMeditating(false);
        setDuration(10);

        // Stop and unload audio if playing
        if (audioRef.current) {
            await audioRef.current.stopAsync();
            await audioRef.current.unloadAsync();
            audioRef.current = null;
        }

        setIsPlayingAudio(false);
        router.back(); // Navigate back
        return true; // Prevent default behavior
    };


    const handleAdjustDuration = async () => {
        router.push("/(modal)/adjust-meditation-duration");
    };


    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) {
            setDuration(10);
        }

        setIsMeditating(!isMeditating);

        if (!isMeditating) {
            await toggleAudioSound();
        } else {
            if (audioRef.current) {
                await audioRef.current.stopAsync();
            }
            setIsPlayingAudio(false);
        }
    };


    const toggleAudioSound = async () => {
        if (!audioRef.current) {
            audioRef.current = await initializeSound();
        }

        if (!audioRef.current) return; // Safety check

        const status = await audioRef.current.getStatusAsync();
        if (status?.isLoaded && status?.isPlaying) {
            await audioRef.current.pauseAsync();
            setIsPlayingAudio(false);
        } else {
            await audioRef.current.playAsync();
            setIsPlayingAudio(true);
        }
    };

    const initializeSound = async () => {
        const meditationIndex = Number(id);
        if (isNaN(meditationIndex) || meditationIndex < 1 || meditationIndex > MEDITATION_DATA.length) {
            return null;
        }
        const audioFileName = MEDITATION_DATA[meditationIndex - 1].audio;

        const {sound} = await Audio.Sound.createAsync(
            AUDIO_FILES[audioFileName],
        );

        return sound;
    };


    // format the time left to ensure two digits are diplayed
    const formattedTimeMinuets = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

    return (
        <View className={"flex-1"}>
            <ImageBackground
                className={"flex-1"}
                resizeMode={"cover"}
                source={MeditationImages[Number(id) - 1]}
            >
                <AppGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Pressable
                        className={"absolute top-16 left-6 z-10"}
                        onPress={handleBackPress}>
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </Pressable>
                    <View className={"flex-1 justify-center"}>
                        <View
                            className={"mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center"}>
                            <Text
                                className={"text-4xl text-blue-800 font-rmono"}>{formattedTimeMinuets}:{formattedTimeSeconds}</Text>
                        </View>
                    </View>
                    <View className={"mb-5"}>
                        <CustomButton
                            onPress={handleAdjustDuration}
                            title={"Adjust Duration"}/>

                        <CustomButton
                            containerStyles={"mt-4"}
                            onPress={toggleMeditationSessionStatus}
                            title={isMeditating ? "Stop" : "Start Meditate!"}/>
                    </View>

                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default Meditate