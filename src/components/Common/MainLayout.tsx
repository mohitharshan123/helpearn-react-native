import { StyleSheet, SafeAreaView } from "react-native";

interface MainAreaViewProps {
  children: React.ReactNode;
  layoutStyle?: any;
}

const MainLayout: React.FC<any> = (props: MainAreaViewProps) => (
  <SafeAreaView style={[styles.container, props.layoutStyle]}>
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#22343C" },
});

export default MainLayout;
