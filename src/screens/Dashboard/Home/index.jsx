import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { MainLayout } from "../../../components";
import { colors } from "../../../styles/colors";
import LottieView from "lottie-react-native";

const Home = () => {
  const [activeGroup, setActiveGroup] = useState("nearby");
  return (
    <MainLayout>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <LottieView
          autoPlay
          loop
          source={require("../../../assets/loader.json")}
          style={{ height: 300 }}
        />
      </View>
    </MainLayout>
  );
};

export default Home;
