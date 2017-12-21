import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

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
});

const Cabecalho = (props) => {
    const { textStyle, viewStyle } = styles;
    const {texto,backFunction} = props;
   
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{texto}</Text>
                { backFunction ? (
                <TouchableOpacity onPress={backFunction}>
                    <Text> Back </Text>
                </TouchableOpacity>
                ) : (null)}
        </View>
    );
}

export { Cabecalho };