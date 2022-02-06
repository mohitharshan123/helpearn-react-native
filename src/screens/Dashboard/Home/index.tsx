import { StyleSheet, StatusBar } from "react-native";

import JobsContainer from "./JobsContainer";

import { MainLayout } from "../../../components";

const jobs = [
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
  {
    created_by: "Mohit Harshan",
    category: "Shopping",
    title: "Buy Grocerries",
    description: "Bug my grocerries",
    tip: 200,
  },
];

const Home = () => {
  return (
    <MainLayout>
      <StatusBar barStyle="light-content" />
      <JobsContainer jobs={jobs} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Home;