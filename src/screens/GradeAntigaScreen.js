import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { selecionarDisciplina } from '../actions';
import Disciplina from '../components/Disciplina';
import { Cabecalho, Botao } from '../components';

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

  gerarPeriodo(periodo) {
    return(
      this.props.disciplinas.filter(disciplina => disciplina.periodo === periodo)
        .map((disciplina) => ( <Disciplina key={disciplina.nome} nome={disciplina.nome} /> ))
    );
  }

  selecionarTudo() {
    this.props.selecionarDisciplina(true);
  }

  goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Cabecalho texto="Grande antiga" backFunction = {() => this.goToHome()}/>
        <ScrollView>
          <View style={{padding: 10}}>
            <Text style={styles.textStyle}>1º Período</Text>
            {this.gerarPeriodo(1)}

            <Text style={styles.textStyle}>2º Período</Text>
            {this.gerarPeriodo(2)}

            <Text style={styles.textStyle}>Optativas</Text>
            {this.gerarPeriodo(0)}
          </View>

          <TouchableOpacity style={styles.button} onPress={this.selecionarTudo.bind(this)}>
            <Text style={styles.buttonText}>Selecionar Tudo</Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Migrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { selecionada } = state.cadeira;
  
  return { disciplinas: state.disciplinas, selecionada  };
}

export default connect(mapStateToProps, { selecionarDisciplina })(GradeAntigaScreen);