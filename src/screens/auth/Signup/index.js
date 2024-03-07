import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from './styles'
import Button from '../../../components/Button'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const onBack = () => {
        navigation.goBack();
    }

    const onSignIn = () => {
        navigation.navigate('Signin');
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up" />
                <Input placeholder="John Doe" label="Name" />
                <Input placeholder="example@gmail.com" label="Email" />
                <Input placeholder="********" label="Password" isPassword />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button style={styles.button} title="Sign Up" />
                <Seperator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Already have an account?
                    <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Signup;