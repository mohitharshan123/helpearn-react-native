import PropTypes from "prop-types";
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import Animated, { interpolateColors, spring } from "react-native-reanimated";

import { SWITCH_HEIGHT, SWITCH_WIDTH } from "../../constants";
import {
  HEADER_DELTA,
  WINDOW_WIDTH,
} from "../../screens/Dashboard/Home/constants";
import { colors } from "../../styles/colors";

const Toggle = ({ handleOnPress, thumbColor, isRemote }) => {
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

  const backgroundColour = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 20],
      outputColorRange: [
        colors.dark.button.primary,
        colors.dark.button.secondary,
      ],
    }),
  };
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
      <Animated.View style={[styles.containerStyle, backgroundColour]}>
        <Animated.View
          style={[
            styles.circleStyle,
            { backgroundColor: thumbColor },
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: SWITCH_HEIGHT,
    height: SWITCH_HEIGHT,
    borderRadius: 33,
  },
  containerStyle: {
    width: SWITCH_WIDTH,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 36.5,
    backgroundColor: colors.dark.primary,
    alignItems: "center",
    opacity: 0.5,
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

Toggle.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
  activeTrackColor: PropTypes.string,
  inActiveTrackColor: PropTypes.string,
  thumbColor: PropTypes.string,
};

Toggle.defaultProps = {
  activeTrackColor: "#007AFF",
  inActiveTrackColor: "#F2F5F7",
  thumbColor: "#FFF",
};

export default Toggle;
