import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {Styles.backgroundStyle}>
            <Feather name="search"  style = {Styles.iconStyle}/>
            <TextInput 
            placeholder="Search" 
            value = {term}
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
            style = {Styles.inputStyle}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor : '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle : {
       flex :1,
       fontSize : 18
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : 'center',
        marginHorizontal : 15

    }
});

export default SearchBar; 