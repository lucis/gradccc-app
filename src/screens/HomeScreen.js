import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Button from '../components/Button';
import Header from '../components/Header';

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

  goToFeedback() {
    const {navigate} = this.props.navigation;
    navigate('Feedback');
  }

  goToLogin() {
    const {navigate} = this.props.navigation;
    navigate('Login');
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
          <Button onPress={() => this.goToLogin()}>
            Login
          </Button>
          <Button onPress={() => this.goToFeedback()}>
            Feedback
          </Button>
        </View>
      </View>
    );
  }
}
export default HomeScreen;