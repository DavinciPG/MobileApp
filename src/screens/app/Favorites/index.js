import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import Header from '../../../components/Header';
import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';

const Favorites = () => {
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            NavigationContainer.navigate('ProductDetails', { product: item });
        }

        return (
            <FavoriteItem onPress={onProductPress}
                {...item}
            />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" />
                <FlatList data={products} renderItem={renderItem}
                keyExtractor={(item) => String(item.id)} />
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Favorites);