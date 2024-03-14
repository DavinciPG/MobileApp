import React, { useContext, useState } from "react";
import { Text, View, Image, Pressable, Alert } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);

  const onBack = () => {
    navigation.goBack();
  };

  const onSignUp = () => {
    navigation.navigate("Signup");
  };

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSignIn = () => {
    console.log("login values => ", values);
    if (!values?.email || !values?.password) {
      Alert.alert("All fields are required!");
      return;
    }

    axios
      .post("http://192.168.18.4/api/user/login", values)
      .then(async (response) => {
        console.log(response?.data?.accesToken);
        const accessToken = response?.data?.accessToken;
        setUser({ accessToken });

        if (response?.data?.token) {
          await AsyncStorage.setItem("auth_token", `${response?.data?.token}`);
        }
      })
      .catch((error) => {
        console.log("login error => ", error.response.data);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input value={values.email} onChangeText={(v) => onChange('email', v)} placeholder="example@gmail.com" label="Email" />
        <Input value={values.password} onChangeText={(v) => onChange('password', v)} placeholder="********" label="Password" isPassword />
        <Button style={styles.button} onPress={onSignIn} title="Sign In" />
        <Seperator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
