import { StatusBar, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import Content from "./Content";

import { MainLayout } from "../../../components";
import { colors } from "../../../styles/colors";

const jobs = [
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "male",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "female",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "female",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "male",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "male",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
    creator: "female",
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
];

const Home = () => {
  const y = useSharedValue(0);

  return (
    <MainLayout>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Content y={y} jobs={jobs} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.primary,
  },
});

export default Home;
