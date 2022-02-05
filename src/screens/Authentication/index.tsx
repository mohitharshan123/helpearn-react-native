const load = Firebase.auth();
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HEIGHT } from "../../styles/utils";
import { colors } from "../../styles/colors";
import ProfileIcon from "../../assets/icons/Profile";
import PasswordIcon from "../../assets/icons/Password";
import ShowPasswordIcon from "../../assets/icons/ShowPassword";
import { Button, Input, MainLayout, LargeText } from "../../components";
import { UserContext } from "../../contexts/user";
import Firebase from "../../firebase";

const auth = getAuth();

const Authentication: React.FC<{}> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const disableButton = !email || !password;

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      navigation.navigate("Dashboard");
    }
  });

  const handleLogin = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUserInfo(user);
      navigation.navigate("Dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserInfo(user);
      navigation.navigate("Dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout layoutStyle={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <LargeText>Welcome!</LargeText>
          <Text style={styles.subtitle}>Sign in to continue. </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            Icon={() => <ProfileIcon />}
            placeholder={"Enter email"}
            onChangeText={setEmail}
          />
          <Input
            Icon={() => <PasswordIcon />}
            RightIcon={() => (
              <TouchableOpacity
                onPress={() => setIsPasswordVisible((isVisible) => !isVisible)}
              >
                <ShowPasswordIcon />
              </TouchableOpacity>
            )}
            onChangeText={setPassword}
            placeholder={"Enter password"}
            secureTextEntry={!isPasswordVisible}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonType="primary"
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={disableButton}
          >
            Sign in
          </Button>
          <Button
            buttonType="secondary"
            onPress={handleRegister}
            disabled={disableButton}
            activeOpacity={0.8}
            buttonStyle={{ marginTop: 25 }}
          >
            Create an account
          </Button>
        </View>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  formContainer: { marginBottom: 60, flexDirection: "column" },
  header: { marginTop: HEIGHT * 0.2 },
  subtitle: { color: colors.dark.text.prinmary, fontSize: 24, marginTop: 8 },
  registerButton: { backgroundColor: "#800000", marginTop: 20 },
  buttonText: { fontSize: 20, color: "white" },
  buttonContainer: {
    justifyContent: "space-between",
    display: "flex",
    flex: 1,
  },
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
