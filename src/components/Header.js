import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Header = (props) => {
    const { headerStyle, textStyle } = styles;
    const {headerText,backFunction} = props;

    return(
        <View style={headerStyle}>
          <Text style={textStyle}>{headerText}</Text>

          { backFunction ? (
          <TouchableOpacity onPress={backFunction}>
              <Text> Back </Text>
          </TouchableOpacity>
          ) : (null)}
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#069',
        alignItems: 'center',
        flexDirection:'column',
        height:60,
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
        marginTop: 12
    }
})

export default Header;
