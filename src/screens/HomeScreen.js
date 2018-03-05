import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { logoutUser } from '../actions';
import { connect } from 'react-redux';

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
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  goToGradeAntiga() {
    const {navigate} = this.props.navigation;
    navigate('GradeAntiga');
  }


  goToFAQ() {
    const {navigate} = this.props.navigation;
    navigate('FAQ');
  }

  goToLogin() {
    const {navigate} = this.props.navigation;
    navigate('Login');
  }

  renderLoginButton(){
    if(this.props.auth.user==null){
      return(
        <Button onPress={() => this.goToLogin()}>
          Login
        </Button>
      );
    }
    else{
      return (
        <Button onPress={() => this.props.logoutUser()}>
          Logout
        </Button>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="GradCCC" />
        <View style={styles.screenContent}>
          <Text style={styles.textStyle}>Bem Vindo ao GradCCC!</Text>
          <Text style={styles.textStyle}>Para começar, clique no botão abaixo.</Text>
          <Button onPress={() => this.goToGradeAntiga()}>
            Vamos lá!
          </Button>
          {this.renderLoginButton()}
          <Button onPress={() => this.goToFAQ()}>
            FAQ
          </Button>
        </View>
        <Footer  navigation={ this.props.navigation }/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { logoutUser })(HomeScreen);;
