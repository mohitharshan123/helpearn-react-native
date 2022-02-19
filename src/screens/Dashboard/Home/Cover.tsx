import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { MAX_HEADER_HEIGHT, HEADER_DELTA } from "./constants";

import { colors } from "../../../styles/colors";

interface CoverProps {
  y: Animated.SharedValue<number>;
}
const Cover = ({ y }: CoverProps) => {
  const animatedScale = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          y.value,
          [-MAX_HEADER_HEIGHT, 0],
          [6, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [-64, 0, HEADER_DELTA],
      [0, 0.2, 1],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <Animated.View style={[styles.container, animatedScale]}>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.dark.primary,
          },
          animatedOpacity,
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Cover;
