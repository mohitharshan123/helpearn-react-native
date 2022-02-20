import { View, StyleSheet } from "react-native";

import { FemaleAvatar, MaleAvatar } from "../../assets";

interface AvatarProps {
  type: "male" | "female";
}
const Avatar = ({ type = "male" }: AvatarProps) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        type === "male" ? styles.maleAvatar : styles.femaleAvatar,
      ]}
    >
      {type === "male" ? <MaleAvatar /> : <FemaleAvatar />}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  maleAvatar: {
    backgroundColor: "#FFC542",
  },
  femaleAvatar: {
    backgroundColor: "#FF565E",
  },
});

export default Avatar;
