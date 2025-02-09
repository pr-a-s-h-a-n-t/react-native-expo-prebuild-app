import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import Content from "@/components/Content";
import {StatusBar} from "expo-status-bar";
import {statusBarHeight} from "@/constants";

const AppGradient = ({
                         children,
                         colors,
                     }: {
    children: React.ReactNode;
    colors: [string, string, ...string[]];
}) => {
    return (
        <LinearGradient style={{flex: 1, paddingTop: statusBarHeight}} colors={colors}>
            <StatusBar style={"light"}/>
            <Content>{children}</Content>
        </LinearGradient>
    );
};

export default AppGradient;
