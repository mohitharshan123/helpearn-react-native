import { View, StyleSheet } from "react-native";
import OnboardingSwiper from "react-native-onboarding-swiper";

import { ONBOARDING_PAGES } from "./utils";

import { colors } from "../../styles/colors";

const Onboarding = () => (
  <OnboardingSwiper
    showSkip={false}
    containerStyles={styles.container}
    imageContainerStyles={styles.container}
    subTitleStyles={styles.subtitle}
    pages={ONBOARDING_PAGES}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    marginBottom: 120,
    fontSize: 15,
    color: colors.dark.text.prinmary,
  },
});

export default Onboarding;
