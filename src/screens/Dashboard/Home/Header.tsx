import * as React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MIN_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import { BUTTON_HEIGHT } from "./ShufflePlay";

interface HeaderProps {
  y: Animated.SharedValue<number>;
}
export default ({  y }: HeaderProps) => {
  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [HEADER_DELTA - 16, HEADER_DELTA],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  return (
    <Animated.View style={[styles.container, animatedOpacity]}>
     
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: BUTTON_HEIGHT / 2 - MIN_HEADER_HEIGHT,
    left: 0,
    right: 0,
    height: MIN_HEADER_HEIGHT,
    backgroundColor: ,
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
});
