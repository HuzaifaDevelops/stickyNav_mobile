
import React from "react";
import { IconButton } from "react-native-paper";
const IconButtonComp = ({
    iconName,
    iconSize,
    onIconPress,
    style,
    iconColor,
}) => {
    return (
        <IconButton
            icon={iconName}
            size={iconSize}
            onPress={onIconPress}
            style={style}
            iconColor={iconColor}
        />
    );
};

export default IconButtonComp;