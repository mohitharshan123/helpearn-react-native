import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";

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
}

export default ({ jobs }: ContentProps) => {
  const [isRemote, setIsNearby] = useState(false);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const scrollViewRef = useRef();

  const handleOnJobsTypeToggle = (value) => {
    setIsNearby(value);
  };

  const renderCategoryRow = (categories) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {categories.slice(0, 4).map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setSelectedCategory(item)}
        >
          <CategoryItem item={item} selectedCategory={selectedCategory} />
        </TouchableOpacity>
      ))}
    </View>
  );

  const [refreshing] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        stickyHeaderIndices={[0, 1]}
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
          onSwitch={() => scrollViewRef?.current?.scrollTo({})}
        />
        <View style={styles.jobs}>
          {jobs.map((job, key) => (
            <JobItem {...{ job, key }} />
          ))}
        </View>
      </ScrollView>
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
