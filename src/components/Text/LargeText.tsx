import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextProps {
  children: React.ReactNode;
  style: any;
}

const LargeText: React.FC<any> = (props: TextProps) => (
  <Text style={[styles.text, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: { fontSize: 42, color: "white", fontWeight: "bold" },
});

export default LargeText;
