import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import Config from 'react-native-config';

const App = () => {
  useEffect(() => { 
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: Config.IOS_CLIENT_ID
    })
  }, []);
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default React.memo(App);
