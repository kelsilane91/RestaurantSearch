import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black" style={styles.iconStyle}/>
            <TextInput placeholder='Search' style={styles.inputStyle}>Bar</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 16,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar;