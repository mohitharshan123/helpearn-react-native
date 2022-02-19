import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { FlatGrid } from "react-native-super-grid";

import { MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT } from "./constants";

import Item from "../../../components/Item";
import { colors } from "../../../styles/colors";
import JobTypeSwitch from "../../../components/Toggle";
import CategoryItem from "../../../components/CategoryItem";
import { SWITCH_HEIGHT } from "../../../constants";

const CATEGORIES = [
  { icon: "bicycle", isSelected: false },
  { icon: "american-football", isSelected: false },
  { icon: "cart", isSelected: false },
  { icon: "camera", isSelected: false },
  { icon: "book", isSelected: false },
  { icon: "help-buoy", isSelected: false },
  { icon: "bicycle", isSelected: false },
  { icon: "bicycle", isSelected: false },
];

interface ContentProps {
  jobs: any;
  y: Animated.SharedValue<number>;
}

export default ({ jobs, y }: ContentProps) => {
  const [isRemote, setIsNearby] = useState(false);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleOnJobsTypeToggle = (value) => {
    setIsNearby(value);
  };

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
      <FlatGrid
        itemDimension={80}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedCategory(item)}
          >
            <CategoryItem
              y={y}
              item={item}
              selectedCategory={selectedCategory}
            />
          </TouchableOpacity>
        )}
      />

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
    paddingTop: 15,
  },
  cover: { marginBottom: 20, padding: 20 },
  jobs: {
    backgroundColor: colors.dark.primary,
  },
});
