import { StyleSheet } from "react-native";
import OnboardingSwiper from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONBOARDING_PAGES } from "./utils";

import { colors } from "../../styles/colors";

const Onboarding: React.FC<{}> = ({ navigation }) => {
  const saveOnboardingState = async () => {
    try {
      await AsyncStorage.setItem("onboarding_completed", "true");
      navigation.navigate("Authentication");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <OnboardingSwiper
      showSkip={false}
      containerStyles={styles.container}
      imageContainerStyles={styles.container}
      subTitleStyles={styles.subtitle}
      pages={ONBOARDING_PAGES}
      onDone={saveOnboardingState}
    />
  );
};

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
