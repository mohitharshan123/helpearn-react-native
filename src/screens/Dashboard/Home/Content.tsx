import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { FlatGrid } from "react-native-super-grid";

import { colors } from "../../../styles/colors";
import { JobItem, CategoryItem, JobTypeSwitcher } from "../../../components";
import { Category } from "../../../common/interfaces/category.interface";

const CATEGORIES: Array<Category> = [
  { icon: "bicycle", label: "Ride" },
  { icon: "american-football", label: "Ride" },
  { icon: "cart", label: "Ride" },
  { icon: "camera", label: "Ride" },
  { icon: "book", label: "Ride" },
  { icon: "help-buoy", label: "Ride" },
  { icon: "bicycle", label: "Ride" },
  { icon: "bicycle", label: "Ride" },
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

  const renderCategoryRow = (categories) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {categories.slice(0, 4).map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setSelectedCategory(item)}
        >
          <CategoryItem y={y} item={item} selectedCategory={selectedCategory} />
        </TouchableOpacity>
      ))}
    </View>
  );

  const [refreshing] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        stickyHeaderIndices={[1]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {}}
            title="Loading..."
          />
        }
      >
        <View style={{ flexDirection: "column", padding: 20 }}>
          {renderCategoryRow(categories.slice(0, 4))}
          {renderCategoryRow(categories.slice(4, 8))}
        </View>
        <JobTypeSwitcher
          handleOnPress={handleOnJobsTypeToggle}
          isRemote={isRemote}
        />
        <View style={styles.jobs}>
          {jobs.map((job, key) => (
            <JobItem {...{ job, key }} />
          ))}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
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
