import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Get current auth state from AsyncStorage
  const getUserInfo = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem("userInfo");
      const userInfo = JSON.parse(userInfoString || {});
      setUser(userInfo);
    } catch (err) {
      setUser({});
    }
  };

  const setUserInfo = async (userInfo: any) => {
    try {
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setUser(userInfo);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user, getUserInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
