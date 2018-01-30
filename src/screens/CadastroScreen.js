import React from "react";
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { NavigationActions } from 'react-navigation';
import CadastroForm from '../components/CadastroForm';
import Header from '../components/Header';
import Button from '../components/Button';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    screenContent: {
      flex: 1
    }
});

class CadastroScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  goToLogin(){
    const {navigate} = this.props.navigation;

    Alert.alert('Conta criada com sucesso!',
                'Você será redirecionado para a página de login.',
                [{text: 'Ok', onPress: () => navigate('Login')}],
                { cancelable: false }
    );
  };

  redirecionarAposSucesso(){
    if(this.props.cadastro.user!=null){
      this.props.cadastro.user = null;
      this.goToLogin();
    }
  };

  render() {
    return (
        <View style={styles.container}>
            <Header headerText="Cadastro" />
            <CadastroForm />
            {this.redirecionarAposSucesso()}
        </View>
    );
  };
};

const mapStateToProps = state => {
  return { cadastro: state.cadastro }
}

export default connect(mapStateToProps)(CadastroScreen);
