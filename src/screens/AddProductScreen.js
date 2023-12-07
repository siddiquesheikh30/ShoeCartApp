/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { productsSlice } from '../redux/store/features/products/productsSlice';

const AddProductScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694689639_5944281.jpg?w=480&dpr=1.3');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (image && name && brand && description) {
            const newItem = {
                id: Date.now().toString(),
                image,
                images: [image], // For simplicity, assuming only one image for the new item
                name,
                brand,
                price,
                sizes: [39, 40, 41],
                description,
            };

            dispatch(productsSlice.actions.addNewProduct({ newItem }));
            navigation.navigate('Home');
        }

    };
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.image} source={{ uri: image }} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={newText => setName(newText)} defaultValue={name} placeholder="Product Name" placeholderTextColor={'gray'} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={newText => setBrand(newText)} defaultValue={brand} placeholder="Brand Name" placeholderTextColor={'gray'} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={newText => setPrice(newText)} defaultValue={price} placeholder="Enter Product price (eg. $100)" placeholderTextColor={'gray'} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setDescription(newText)}
                    defaultValue={description}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Product Description"
                    placeholderTextColor={'gray'} />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Add Product</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    imageContainer: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 360,
    },
    image: { width: 200, height: 200, aspectRatio: 1, borderRadius: 360 },
    inputContainer: {
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
    },
    input: {
        marginLeft: 10,
        width: '100%',
        fontSize: 16,
        color: '#000',
        textAlignVertical: 'top',
    },
    loginBtn: {
        marginVertical: 30,
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 100,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default AddProductScreen;
