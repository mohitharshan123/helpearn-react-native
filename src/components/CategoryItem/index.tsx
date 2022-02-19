import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

import { SWITCH_HEIGHT } from "../../constants";
import { MAX_HEADER_HEIGHT } from "../../screens/Dashboard/Home/constants";

interface CategoryItemProps {
  Icon?: any;
  RightIcon?: any;
  y: any;
  item: any;
  selectedCategory: any;
}

const CategoryItem: React.FC<any> = (props: CategoryItemProps) => {
  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      props.y.value,
      [-MAX_HEADER_HEIGHT, -SWITCH_HEIGHT / 2],
      [1, 0],
      Extrapolate.CLAMP
    ),
  }));
  return (
    <View
      style={[
        styles.container,
        animatedOpacity,
        props.selectedCategory === props.item && styles.selectedCatgory,
      ]}
    >
      <Ionicons name={props.item.icon} size={32} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
