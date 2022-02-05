import { Image, View } from "react-native";
import { colors } from "../../styles/colors";

export const ONBOARDING_PAGES = [
  {
    backgroundColor: "black",
    image: <Image source={require("../../assets/images/onboarding1.png")} />,
    title: "Welcome to Helpearn!",
    subtitle: "Help other's and Earn.",
  },
  {
    backgroundColor: colors.dark.primary,
    image: <Image source={require("../../assets/images/onboarding2.png")} />,
    title: "Something urgent?",
    subtitle: "Post a task and find those who can help you.",
  },
  {
    backgroundColor: "black",
    image: <Image source={require("../../assets/images/onboarding3.png")} />,
    title: "Want to earn a side income?",
    subtitle: "Help other's nearby or remotely!",
  },
];
