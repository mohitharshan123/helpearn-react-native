import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from "./Model";
import Track from "./Job";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import { colors } from "../../../styles/colors";

interface ContentProps {
  jobs: any;
  y: Animated.SharedValue<number>;
}

export default ({ jobs, y }: ContentProps) => {
  const animatedHeight = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
      [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
      Extrapolate.CLAMP
    ),
  }));

  const scrollHandler = useAnimatedScrollHandler((event) => {
    y.value = event.contentOffset.y;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}>
        <Animated.View style={[styles.gradient, animatedHeight]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={["transparent", "rgba(0, 0, 0, 0.2)", colors.dark.primary]}
          />
        </Animated.View>
      </View>
      <ShufflePlay />
      <View style={styles.tracks}>
        {jobs.map((job, key) => (
          <Track {...{ job, key }} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  tracks: {
    paddingTop: 50,
    backgroundColor: colors.dark.primary,
  },
});
