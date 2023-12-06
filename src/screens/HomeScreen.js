/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../redux/store/features/products/productsSlice';
import { selectedNumberOfItems } from '../redux/store/features/cart/cartSlice';


const HomeScreen = (props) => {
    const { navigation } = props;

    const products = useSelector((state) => state.products.products);
    const NumberOfItem = useSelector(selectedNumberOfItems);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoName}>Sneakershop</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Feather name="shopping-cart" size={32} color="#000" />
                    <View style={{ position: 'absolute', top: 10, right: -8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: 'bold' }}>
                            {NumberOfItem}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => { dispatch(productsSlice.actions.setSelectedProduct(item.id)); navigation.navigate('Detail'); }}
                        style={styles.productContainer}>
                        <View style={styles.productBox}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image} />
                        </View>
                        <View style={{ padding: 8 }}>
                            <Text style={styles.productName}>
                                {item.name}
                            </Text>
                            <Text style={styles.productBrand}>{item.brand}</Text>
                            <Text style={styles.productPrice} className="text-xs text-slate-500 mt-1">
                                $ {item.price}
                                {/* € */}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={2}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        position: 'relative',
    },
    logoName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000',
    },
    productContainer: {
        width: '50%',
        backgroundColor: '#fff',
        paddingBottom: 16,
        marginVertical: 8,
        paddingHorizontal: 3,
    },
    productBox: {
        backgroundColor: '#e2e8f0',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    productName: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    productBrand: {
        textTransform: 'capitalize',
        color: '#000',
    },
    productPrice: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 5,
    },
});
