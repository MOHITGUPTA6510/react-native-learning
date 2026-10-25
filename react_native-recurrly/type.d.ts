import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabIconProps {
        foucused : boolean ;
        icons : ImageSourcePropType;
    }
}

export {};