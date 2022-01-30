import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";
import { colors } from "../../styles/colors";
import { WIDTH } from "../../styles/utils";

interface InputProps extends TextInputProps {
  Icon?: any;
  RightIcon?: any;
}

const Input: React.FC<any> = (props: InputProps) => {
  const Icon = props.Icon;
  const RightIcon = props.RightIcon;
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={colors.dark.text.prinmary}
          selectionColor={colors.dark.text.prinmary}
          underlineColorAndroid="transparent"
          {...props}
        />
        {RightIcon && <RightIcon />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    marginLeft: 10,
    color: colors.dark.text.prinmary,
    fontSize: 18,
    width: 0.7 * WIDTH,
    height: 50,
    flex: 1,
    paddingBottom: 10,
  },
});

export default Input;
