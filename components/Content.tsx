import {SafeAreaView} from "react-native";
import React from "react";

const Content = ({
                     children,
                 }: {
    children: React.ReactNode;
}) => {
    return (
        <SafeAreaView className="flex-1 px-5 py-3">
            {children}
        </SafeAreaView>
    );
};

export default Content;
