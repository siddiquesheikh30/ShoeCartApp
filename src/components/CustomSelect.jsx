/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Actionsheet, Box, useDisclose } from 'native-base';


const CustomSelect = (props) => {
    const { setType, Type, error } = props;
    const {
        isOpen,
        onOpen,
        onClose,
    } = useDisclose();

    function HandleMasterSelect(item) {
        setType(item);
        onClose();
    }

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={onOpen}
            >
                <View>
                    <Text style={[styles.droptitle, { marginLeft: 10, color: '#000' }]}>
                        Login As:
                    </Text>

                    <View style={{ borderWidth: 2, borderColor: error ? 'red' : '#000', borderRadius: 8, marginLeft: 5 }}>
                        <Text style={styles.drop}>
                            {Type}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content style={styles.sheetstyle}>
                    <Box w="100%" h="100%">
                        <View style={styles.sheetBlock}>
                            <Text style={styles.label}>Select the type</Text>
                            <View style={styles.list}>
                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5 }}>
                                    <TouchableOpacity style={[styles.listBtn, { backgroundColor: 'transparent', flex: 11 }]}
                                        onPress={() => HandleMasterSelect('Admin')}
                                    >
                                        <View style={styles.listBlock}>
                                            <Text style={styles.listText}>Admin</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5 }}>
                                    <TouchableOpacity style={[styles.listBtn, { backgroundColor: 'transparent', flex: 11 }]}
                                        onPress={() => HandleMasterSelect('User')}
                                    >
                                        <View style={styles.listBlock}>
                                            <Text style={styles.listText}>User</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    );
};

const styles = StyleSheet.create({
    sheetstyle: {
        backgroundColor: '#fff',
    },
    droptitle: {
        fontSize: 16,
        marginTop: 5
    },
    drop: {
        color: '#000',
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    sheetBlock: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
    },
    list: {
        width: '90%',
        height: '70%',
        backgroundColor: '#fff',
        paddingVertical: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
    listBtn: {
        paddingHorizontal: 5,
    },
    listBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listText: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 7,
        textTransform: 'capitalize',
    },
});

export default CustomSelect;
