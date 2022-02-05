import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./src/navigation/StackNavigator";
import { UserProvider } from "./src/contexts/user";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
