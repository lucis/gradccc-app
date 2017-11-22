import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Cadeira from '../components/Cadeira';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    titulo: {
      fontSize: 25,
      color: '#111'
    },
    textStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    button: {
      padding: 20,
      margin: 10,
      alignItems: 'center',
      height: 70,
      borderWidth: 2, borderColor: '#069',
      backgroundColor: '#069'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center'
  }
});

class GradeAntigaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  goToGradeNova() {
    const { nav, dispatch } = this.props;
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'GradeNova' }),
      ],
    });
    dispatch(navigateAction);
  }

  renderPeriod(period) {
    return(
      this.props.disciplines.filter(discipline => discipline.periodo === period)
        .map((discipline) => ( <Cadeira key={discipline.nome} nomeCadeira={discipline.nome} /> ))
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grande antiga" />
        <ScrollView>
          <View style={{padding: 10}}>

            <Text style={styles.textStyle}>1º Período</Text>
            {this.renderPeriod(1)}

            <Text style={styles.textStyle}>2º Período</Text>
            {this.renderPeriod(2)}

            <Text style={styles.textStyle}>Optativas</Text>
            {this.renderPeriod(0)}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Migrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { disciplines: state.disciplines }
}

export default connect(mapStateToProps)(GradeAntigaScreen);