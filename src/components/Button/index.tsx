import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  buttonType: "primary" | "secondary";
  buttonStyle: StyleSheet;
}

const Button: React.FC<any> = (props: ButtonProps) => {
  const buttonBackgroundColor =
    props.buttonType === "primary"
      ? colors.dark.button.primary
      : colors.dark.button.secondary;

  const textColor = props.buttonType === "primary" ? "white" : "#3DD598";

  const styles = StyleSheet.create({
    button: {
      backgroundColor: buttonBackgroundColor,
      justifyContent: "center",
      alignItems: "center",
      height: 58,
      borderRadius: 12,
    },
    text: {
      color: textColor,
      fontWeight: "bold",
      lineHeight: 16,
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle && { ...props.buttonStyle }]}
      {...props}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
