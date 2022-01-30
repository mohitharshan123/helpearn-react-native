import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";
import { colors } from "../../styles/colors";
import { WIDTH } from "../../styles/utils";

interface InputProps extends TextInputProps {
  Icon?: any;
}

const Input: React.FC<any> = (props: InputProps) => {
  const Icon = props.Icon;
  return (
    <View style={styles.inputContainer}>
      <Icon />
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={colors.dark.text.prinmary}
        selectionColor={colors.dark.text.prinmary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  input: {
    marginLeft: 10,
    color: colors.dark.text.prinmary,
    fontSize: 18,
    width: 0.7 * WIDTH,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Input;
