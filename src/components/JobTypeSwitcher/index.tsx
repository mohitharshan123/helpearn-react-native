import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import Animated, { interpolateColors, spring } from "react-native-reanimated";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import { SWITCH_HEIGHT, SWITCH_WIDTH } from "../../constants";
import { colors } from "../../styles/colors";

interface JobTypeSwitcherProps {
  handleOnPress: Function;
  isRemote: boolean;
}

const JobTypeSwitcher = ({ handleOnPress, isRemote }: JobTypeSwitcherProps) => {
  const [switchTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isRemote) {
      spring(switchTranslate, {
        toValue: SWITCH_WIDTH / 2 - SWITCH_HEIGHT / 2,
        mass: 1,
        damping: 20,
        stiffness: 80,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
      return;
    }
    spring(switchTranslate, {
      toValue: -SWITCH_WIDTH / 2 + SWITCH_HEIGHT / 2,
      mass: 1,
      damping: 20,
      stiffness: 80,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    }).start();
  }, [isRemote, switchTranslate]);

  // const backgroundColour = {
  //   backgroundColor: interpolateColors(switchTranslate, {
  //     inputRange: [0, 20],
  //     outputColorRange: [
  //       colors.dark.button.primary,
  //       colors.dark.button.secondary,
  //     ],
  //   }),
  // };
  const onToggle = useCallback(() => {
    handleOnPress(!isRemote);
  }, [handleOnPress, isRemote]);

  return (
    <Pressable
      onPress={onToggle}
      style={{
        alignItems: "center",
      }}
    >
      <Animated.View style={[styles.containerStyle]}>
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: "gold" },
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
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
