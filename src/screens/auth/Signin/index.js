import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from './styles'
import Button from '../../../components/Button'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input placeholder="example@gmail.com" label="Email" />
            <Input placeholder="********" label="Password" isPassword />
            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    );
};

export default Signin;