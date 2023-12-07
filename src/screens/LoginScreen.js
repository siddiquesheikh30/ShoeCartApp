/* eslint-disable prettier/prettier */


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomSelect from '../components/CustomSelect';

const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (userName === '' || password === '' || userType === '') {
            setError(true);
        } else {
            setError(false);
            navigation.navigate('Home');
        }
    };

    const onSelectUserType = async (newValue) => {
        setUserType(newValue);
        try {
            await AsyncStorage.setItem('my-key', newValue);
        } catch (e) {
            // saving error
        }
    };


    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.container}>

            <Text style={styles.logo}>Sneakershop</Text>

            <View style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.image} source={require('../assets/images/shoe-logo.png')} />
            </View>

            <View style={[styles.inputContainer, { borderColor: error ? 'red' : '#000' }]}>
                <Ionicons name="person-outline" size={30} color="#000" />
                <TextInput style={styles.input} onChangeText={newText => setUserName(newText)} defaultValue={userName} placeholder="User Name" placeholderTextColor={'gray'} />
            </View>

            <View style={[styles.inputContainer, { borderColor: error ? 'red' : '#000' }]}>
                <SimpleLineIcons name="lock" size={30} color="#000" />
                <TextInput style={styles.input} onChangeText={newText => setPassword(newText)} defaultValue={password} placeholder="Password" secureTextEntry={true} placeholderTextColor={'gray'} />
            </View>

            <CustomSelect setType={onSelectUserType} Type={userType} error={error} />

            <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>login</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    imageContainer: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 360,
    },
    image: { width: '100%', height: 'auto', aspectRatio: 1, borderRadius: 360 },
    logo: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 28,
        color: '#000',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    inputContainer: {
        marginTop: 10,
        padding: 5,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        marginLeft: 10,
        width: '85%',
        fontSize: 16,
        color: '#000'
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
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockLine: {
        backgroundColor: '#fff',
        height: 1.3,
        width: '30%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    blockText: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 8,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
    },
    btnStyle: {
        width: '45%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
    },
});

export default LoginScreen;
