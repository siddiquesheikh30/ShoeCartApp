/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';

import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>16,50 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>426,50 US$</Text>
        </View>
    </View>
)

const CartScreen = () => {

    const cartItems = useSelector((state) => state.cart.items)

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable onPress={() => { }} style={styles.button}>
                <Text style={styles.btnText}>Checkout</Text>
            </Pressable>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    button: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
    },
    btnText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});
