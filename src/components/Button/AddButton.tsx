import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { colors } from "../../styles/colors";

const enum Modes {
  EXPANDED = 1,
  HIDDEN = 0,
}

const AddButton = () => {
  let mode = useSharedValue(0);
  let buttonSize = useSharedValue(1);

  const handlePress = () => {
    withSequence(
      (buttonSize.value = withTiming(0.95, { duration: 300 })),
      (buttonSize.value = withTiming(1, { duration: 300 })),
      (mode.value = withTiming(
        mode.value === Modes.HIDDEN ? Modes.EXPANDED : Modes.HIDDEN
      ))
    );
  };

  const therStyles = useAnimatedStyle(() => ({
    left: interpolate(mode.value, [Modes.HIDDEN, Modes.EXPANDED], [12, -70]),
    top: interpolate(mode.value, [Modes.HIDDEN, Modes.EXPANDED], [-18, -100]),
  }));
  const timeStyles = useAnimatedStyle(() => ({
    left: interpolate(mode.value, [Modes.HIDDEN, Modes.EXPANDED], [12, 70]),
    top: interpolate(mode.value, [Modes.HIDDEN, Modes.EXPANDED], [-18, -100]),
  }));

  const sizeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          mode.value,
          [Modes.HIDDEN, Modes.EXPANDED],
          [1, 1.1]
        ),
      },
    ],
  }));

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View
        style={[
          {
            position: "absolute",
          },
          therStyles,
        ]}
      >
        <View style={styles.secondaryButton}>
          <MaterialCommunityIcons
            name="google-nearby"
            size={24}
            color={colors.dark.button.secondary}
          />
        </View>
      </Animated.View>
      <Animated.View style={[{ position: "absolute" }, timeStyles]}>
        <View style={styles.secondaryButton}>
          <Entypo
            name="location"
            size={24}
            color={colors.dark.button.secondary}
          />
        </View>
      </Animated.View>

      <Animated.View style={[styles.button, sizeStyle]}>
        <TouchableOpacity onPress={handlePress}>
          <Animated.View>
            <FontAwesome5
              name="plus"
              size={24}
              color={colors.dark.button.secondary}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.dark.button.primary,
  },
});

export default AddButton;
