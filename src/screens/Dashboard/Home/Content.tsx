import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from "./constants";

import Item from "../../../components/Item";
import { colors } from "../../../styles/colors";
import JobTypeSwitch from "../../../components/Toggle";
import { SWITCH_HEIGHT } from "../../../constants";

interface ContentProps {
  jobs: any;
  y: Animated.SharedValue<number>;
}

export default ({ jobs, y }: ContentProps) => {
  const [isRemote, setIsNearby] = useState(false);

  const handleOnJobsTypeToggle = (value) => {
    setIsNearby(value);
  };
  const animatedHeight = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [-MAX_HEADER_HEIGHT, -SWITCH_HEIGHT / 2],
      [0, MAX_HEADER_HEIGHT + SWITCH_HEIGHT],
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
      <JobTypeSwitch
        handleOnPress={handleOnJobsTypeToggle}
        isRemote={isRemote}
      />
      <View style={styles.jobs}>
        {jobs.map((job, key) => (
          <Item {...{ job, key }} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - SWITCH_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - SWITCH_HEIGHT - 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  jobs: {
    backgroundColor: colors.dark.primary,
  },
});
