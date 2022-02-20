import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../../styles/colors";

const AddButton = ({ navigateToJobCreate }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={[styles.button]}>
        <TouchableOpacity onPress={navigateToJobCreate}>
          <View>
            <FontAwesome5
              name="plus"
              size={24}
              color={colors.dark.button.secondary}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.dark.button.primary,
    marginTop: -40,
    shadowColor: "#7F58FF",
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.dark.button.primary,
    zIndex: 2,
  },
});

export default AddButton;
