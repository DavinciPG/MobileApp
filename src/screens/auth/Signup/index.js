import React, { useContext, useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);

  const onBack = () => {
    navigation.goBack();
  };

  const onSignIn = () => {
    navigation.navigate("Signin");
  };

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onSubmit = () => {
    if (!values?.fullName || !values?.email || !values?.password) {
      Alert.alert("All fields are required!");
      return;
    }
    if (!checked) {
      Alert.alert("Please agree with the terms");
      return;
    }

    axios
      .post("http://192.168.17.234/api/user/register", values)
      .then((response) => {
        console.log("signup => ", response);
        const { email, password } = values;
        axios
          .post("http://192.168.17.234/api/user/login", values)
          .then(async (response) => {
            console.log("login => ", response);
            const accessToken = response?.data?.accessToken;
            console.log(accessToken);
            setUser({ accessToken });
            if (response?.data?.token) {
              await AsyncStorage.setItem(
                "auth_token",
                `${response?.data?.token}`
              );
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input
          value={values.fullName}
          onChangeText={(v) => onChange("fullName", v)}
          placeholder="John Doe"
          label="Name"
        />
        <Input
          value={values.email}
          onChangeText={(v) => onChange("email", v)}
          placeholder="example@gmail.com"
          label="Email"
        />
        <Input
          value={values.password}
          onChangeText={(v) => onChange("password", v)}
          placeholder="********"
          label="Password"
          isPassword
        />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{" "}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>
        <Button onPress={onSubmit} style={styles.button} title="Sign Up" />
        <Seperator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
