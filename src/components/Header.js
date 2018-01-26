import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Header = (props) => {
    const { headerStyle, textStyle, backStyle, titleStyle } = styles;
    const {headerText,backFunction} = props;
    
    return(
        <View style={headerStyle}>
            <View style={backStyle}>
                { backFunction ? (
                <TouchableOpacity onPress={backFunction}>
                    <Text> Back </Text>
                </TouchableOpacity>
                ) : (null)}
            </View>
            
            <View style={titleStyle}>
                <Text style={textStyle}>{headerText}</Text>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#069',
        alignItems: 'center',
        flexDirection:'row',
        height:60,
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    },
    backStyle:{
        justifyContent: 'flex-end'
    },
    titleStyle: {
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default Header;