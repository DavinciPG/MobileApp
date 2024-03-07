import React, { useState } from "react";
import { Text, Pressable, View, Image, Input, ScrollView, SafeAreaView } from "react-native";
import Button from "../Button";
import { styles } from './styles'

const ProductDetails = ({navigation, route}) => {
    const { product } = route.params || {};

    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: product?.image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable>
                    <Image source={require('../../assets/tabs/bookmark.png')} />
                </Pressable>
                <Button style={styles.button} title="Contact Seller" />
            </View>
      </SafeAreaView>
    );
};

export default React.memo(ProductDetails);