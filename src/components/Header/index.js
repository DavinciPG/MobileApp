import React, { useState } from "react";
import { Text, Pressable, View, Image, Input } from "react-native";
import { styles } from './styles'

const Header = ({ title, onBackPress, onLogout, showBack, showSearch, showLogout }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearch = () => {
        setShowSearchInput(search => !search);
    }

    return (
        <View>
            <View style={styles.container}>
                { showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                    ) : <View style={styles.space} />
                }
                <Text style={styles.title}>{title}</Text>
                { showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space} />
                }
            </View>
            {
                showSearchInput ? (
                    <Input placeholder="Type your keyword" />
                ) : null
            }
        </View>
    );
};

export default React.memo(Header);