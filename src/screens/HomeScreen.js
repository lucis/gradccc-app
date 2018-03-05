import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from '../components/Header';
import Button from '../components/Button';
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
    messageContent: {
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

  goToFeedback() {
    const {navigate} = this.props.navigation;
    navigate('Feedback');
  }

  goToFAQ() {
    const {navigate} = this.props.navigation;
    navigate('FAQ');
  }

  goToLogin() {
    const {navigate} = this.props.navigation;
    navigate('Login');
  }

  logout(){
      this.props.logoutUser();
      const {navigate} = this.props.navigation;
      navigate('Home');
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
        <Button onPress={() => this.logout()}>
          Logout
        </Button>
      );
    }
  }

  renderInitialMessage(){
      const { user } = this.props.auth;
      const message = "Bem Vindo ao GradCCC" + ( user!=null ?
          ", " + user.displayName : "" ) + "!";
      return (
          <View style={styles.messageContent}>
            <Text style={styles.textStyle}>{message}</Text>
            <Text style={styles.textStyle}>Para começar, clique no botão abaixo.</Text>
          </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="GradCCC" />
        <View style={styles.screenContent}>
          {this.renderInitialMessage()}
          <Button onPress={() => this.goToGradeAntiga()}>
            Vamos lá!
          </Button>
          {this.renderLoginButton()}
          <Button onPress={() => this.goToFeedback()}>
            Feedback
          </Button>
          <Button onPress={() => this.goToFAQ()}>
            FAQ
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { logoutUser })(HomeScreen);

