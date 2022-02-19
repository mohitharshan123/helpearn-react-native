import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import Content from "./Content";
import Cover from "./Cover";

import { colors } from "../../../styles/colors";

const JobsContainer = ({ jobs }) => {
  const y = useSharedValue(0);
  return (
    <View style={styles.container}>
      <Cover y={y} />
      <Content y={y} jobs={jobs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.primary,
  },
});

export default JobsContainer;
