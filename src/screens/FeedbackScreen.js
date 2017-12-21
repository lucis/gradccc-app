import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { NavigationActions } from 'react-navigation';
import { Cabecalho, Botao } from '../components';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 14
    },
    textarea: {
        height: 50,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1
    }
});

class FeedbackScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    goToHome(){
        const {navigate} = this.props.navigation;
        navigate('Home');
      }
    
    render() {
        return (
            <View style={styles.container}>
                <Cabecalho texto="Feedback"  backFunction = {() => this.goToHome()}/>
                <View style={styles.content}>
                    <TextInput
                        style = {styles.textarea}
                        multiline = {true}
                        autoGrow = {true}
                        editable = {true}
                        underlineColorAndroid= 'rgba(0,0,0,0)'
                    />
                    <Botao onPress={() => {}}>
                        Enviar
                    </Botao>
                </View>
            </View> 
        );
    }
}

export default FeedbackScreen;