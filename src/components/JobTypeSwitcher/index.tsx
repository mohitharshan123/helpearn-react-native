import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Animated, {
  spring,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import { SWITCH_HEIGHT, SWITCH_WIDTH } from "../../constants";
import { colors } from "../../styles/colors";

const JobTypeSwitcher = () => {
  const leftValue = -SWITCH_WIDTH / 2 + SWITCH_HEIGHT / 2;
  const rightValue = SWITCH_WIDTH / 2 - SWITCH_HEIGHT / 2;
  const switchTranslate = useSharedValue(leftValue);

  const [isRemote, setIsRemote] = useState(false);

  const animatedSwitch = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(switchTranslate.value, {
          mass: 1,
          damping: 20,
          stiffness: 80,
          overshootClamping: false,
          restSpeedThreshold: 0.001,
          restDisplacementThreshold: 0.001,
        }),
      },
    ],
  }));

  const onToggle = () => {
    if (switchTranslate.value === leftValue) {
      switchTranslate.value = rightValue;
      setIsRemote(true);
    } else {
      setIsRemote(false);
      switchTranslate.value = leftValue;
    }
  };

  return (
    <Pressable
      onPress={onToggle}
      style={{
        alignItems: "center",
      }}
    >
      <Animated.View style={[styles.containerStyle]}>
        <Animated.View
          style={[styles.circleStyle, animatedSwitch, styles.shadowValue]}
        >
          {isRemote ? (
            <MaterialCommunityIcons
              name="google-nearby"
              size={24}
              color={colors.dark.button.secondary}
            />
          ) : (
            <Entypo
              name="location"
              size={24}
              color={colors.dark.button.secondary}
            />
          )}
        </Animated.View>
        <Text style={styles.text}>{isRemote ? "Remote" : "Nearby"}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: SWITCH_HEIGHT,
    height: SWITCH_HEIGHT,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerStyle: {
    width: SWITCH_WIDTH,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 36.5,
    backgroundColor: colors.dark.button.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowValue: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default JobTypeSwitcher;
