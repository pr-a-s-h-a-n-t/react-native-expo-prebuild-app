import React, {createContext, Dispatch, useState} from "react";

interface TimerContextType {
    duration: number;
    setDuration: Dispatch<React.SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
    duration: 10,
    setDuration: () => {
    }
})

interface TimerProviderProps {
    children: React.ReactNode;
}

const TimerProvider: React.FC<TimerProviderProps> = ({children}) => {
    const [duration, setDuration] = useState(10);

    return (
        <TimerContext.Provider value={{duration, setDuration}}>
            {children}
        </TimerContext.Provider>
    )
};

export default TimerProvider;