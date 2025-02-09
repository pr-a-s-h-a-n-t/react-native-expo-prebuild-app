import {Tabs} from "expo-router";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
            }}>
            <Tabs.Screen
                name={"nature-meditate"}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="meditation" size={24} color={color}/>
                    ),
                    tabBarLabel: "Meditate"
                }}
            />
            <Tabs.Screen
                name={"affirmations"}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons
                            name="flower-tulip"
                            size={24}
                            color={color}
                        />
                    ),
                    tabBarLabel: "Affirmations"
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;