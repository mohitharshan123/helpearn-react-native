import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { SWITCH_HEIGHT } from "../../constants";
import { MAX_HEADER_HEIGHT } from "../../common/constants";
import { Category } from "../../common/interfaces/category.interface";

interface CategoryItemProps {
  item: Category;
  selectedCategory: Category;
}

const CategoryItem: React.FC<any> = ({
  item,
  selectedCategory,
}: CategoryItemProps) => {
  return (
    <View
      style={[
        styles.container,
        selectedCategory === item && styles.selectedCatgory,
      ]}
    >
      <Ionicons name={item.icon} size={32} color="white" />
      <Text style={{ color: "white" }}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FF575F",
    width: 80,
    height: 82,
    justifyContent: "center",
    borderRadius: 20,
    padding: 2,
  },
  selectedCatgory: {
    borderWidth: 3,
    borderColor: "gold",
  },
});

export default CategoryItem;
