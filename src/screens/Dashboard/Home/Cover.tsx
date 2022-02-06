import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colors } from "../../../styles/colors";
import { MAX_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import { BUTTON_HEIGHT } from "./ShufflePlay";

interface CoverProps {
  y: Animated.SharedValue<number>;
}

export default ({ y }: CoverProps) => {
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
      <Image
        style={styles.image}
        source={require("../../../assets/images/onboarding1.png")}
      />
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
    height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
