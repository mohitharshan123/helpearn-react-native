import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import MainLayout from "../../components/Common/MainLayout";
import { colors } from "../../styles/colors";
import { WINDOW_WIDTH } from "../../common/constants";

const JobType = ({ next, back }) => {
  return (
    <MainLayout layoutStyle={{ alignItems: "center" }}>
      <View style={styles.container}>
        <Text style={[styles.header, styles.text]}>Pick job type</Text>
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
              <MaterialCommunityIcons
                name="google-nearby"
                size={40}
                color={colors.dark.button.secondary}
                onPress={next}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Remote</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
              <Entypo
                name="location"
                size={40}
                color={colors.dark.button.secondary}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Nearby</Text>
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fle: 1,
  },
  text: { color: "white" },
  header: { fontSize: 22 },
  formContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 50,
    alignItems: "center",
    width: WINDOW_WIDTH,
  },
  icon: {
    borderRadius: 50,
    backgroundColor: "gold",
    padding: 20,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default JobType;
