import {Platform, StatusBar} from "react-native";
import Constants from "expo-constants/src/Constants";

export const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight || 24 : Constants.statusBarHeight;
