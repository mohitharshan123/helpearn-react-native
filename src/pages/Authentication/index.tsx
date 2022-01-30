import Firebase from "../../firebase";
const load = Firebase.auth();
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MainLayout from "../../components/Common/MainLayout";
import ProfileIcon from "../../assets/icons/profile";
import PasswordIcon from "../../assets/icons/password";

import LargeText from "../../components/Text/LargeText";
import Input from "../../components/Input";
import { HEIGHT, WIDTH } from "../../styles/utils";
import { colors } from "../../styles/colors";

const auth = getAuth();

const Authentication: React.FC<{}> = ({ navigation }) => {
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      navigation.navigate("Home");
    }

    // Do other things
  });
  const { container, topImage, formContainer } = styles;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disableButtons = !email || !password;

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <MainLayout layoutStyle={styles.container}>
      <View style={formContainer}>
        <View style={styles.header}>
          <LargeText>Welcome!</LargeText>
          <Text style={styles.subtitle}>Sign in to Continue</Text>
        </View>
        <View style={styles.formContainer}>
          <Input Icon={() => <ProfileIcon />} placeholder={"Enter email"} />
          <Input
            Icon={() => <PasswordIcon />}
            placeholder={"Enter password"}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={login}
          activeOpacity={0.8}
          disabled={disableButtons}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={register}
          activeOpacity={0.8}
          disabled={disableButtons}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  formContainer: { marginBottom: 60 },
  header: { marginTop: HEIGHT * 0.2 },
  subtitle: { color: colors.dark.text.prinmary, fontSize: 24, marginTop: 8 },
  registerButton: { backgroundColor: "#800000", marginTop: 20 },
  buttonText: { fontSize: 20, color: "white" },
  button: {
    height: 50,
    width: 160,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe6e6",
  },
});

export default Authentication;
