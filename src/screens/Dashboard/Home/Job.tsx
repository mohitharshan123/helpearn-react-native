import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

export default ({ job }) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{job.created_by}</Text>
    </View>
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.name}>{job.category}</Text>
      <Text style={styles.artist}>{job.description}</Text>
    </View>
    <View style={styles.cell}>
      <Icon name="more-horizontal" color="#b2b3b4" size={24} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: colors.dark.primary,
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    color: "#b2b3b4",
  },
  name: {
    color: "white",
  },
});
