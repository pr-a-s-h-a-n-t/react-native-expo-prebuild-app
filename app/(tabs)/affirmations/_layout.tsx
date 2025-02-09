import {Stack} from "expo-router";

const AffirationsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{headerShown: false}}/>
            <Stack.Screen name={"[itemId]"} options={{headerShown: false}}/>
        </Stack>
    )
}

export default AffirationsLayout;