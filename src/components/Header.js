import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#069',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        elevation: 1,
        position: 'relative',
        
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    }
})

export default Header;