import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from './styles'
import Button from '../../../components/Button'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
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
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    );
};

export default Signup;