import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Cabecalho, Botao } from '../components';

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
      fontSize: 18
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

  render() {
    return (
      <View style={styles.container}>
        <Cabecalho texto="GradCCC" />
        <View style={styles.screenContent}>
          <Text style={styles.textStyle}>Bem Vindo ao GradCCC!</Text>
          <Text style={styles.textStyle}>Para começar, clique no botão abaixo.</Text>
          <Botao onPress={() => this.goToGradeAntiga()}>
            Vamos lá!
          </Botao>
          <Botao onPress={() => this.goToFeedback()}>
            Feedback
          </Botao>
          <Botao onPress={() => this.goToFAQ()}>
            FAQ
          </Botao>
        </View>
      </View>
    );
  }
}
export default HomeScreen;