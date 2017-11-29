import React from "react";
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Button from '../components/Button';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    tile: {
      flex: 0.5,
      backgroundColor: '#069'
    },
    screenContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 14
    }
});

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
        <View style={styles.container}>
            <Header headerText="GradCCC" />
            <LoginForm />
        </View>   
    );
  }
};

export default connect()(LoginScreen);