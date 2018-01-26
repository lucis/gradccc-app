import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Cadeira from '../components/Cadeira';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import { loadGradeAntiga, toggleCadeira, selecionarTodasAsCadeiras, selecionarTodasAsCadeirasDoPeriodo } from '../actions';

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

  componentWillMount(){
    this.props.loadGradeAntiga();
    this.setState({
      selecionarTudo: false
    });
  }

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

  renderPeriodo(periodo) {
    const cadeiras = this.props.cadeiras[periodo];
    return (
      <View>
        <Text style={styles.textStyle}>{periodo}º período</Text>
        {this.renderDisciplinas(periodo, cadeiras)}
      </View>
    )
  }

  renderDisciplinas(periodo, cadeiras){
    // TODO: Provavelmente corrigir o bind
    return (cadeiras || []).map((cadeira)=>
      (<Cadeira periodo={periodo} cadeira={cadeira} selecionar={this.selecionarCadeira.bind(this)}></Cadeira>) 
    );
  }

  selecionarCadeira(periodo, cadeiraId){
    this.props.toggleCadeira(periodo, cadeiraId);
  };

  selecionarTudo() {
    this.props.selecionarTodasAsCadeiras();
  }

  selecionarCadeirasPorPeriodo() {
    this.props.selecionarTodasAsCadeirasDoPeriodo(1);
  }

  goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grande antiga" backFunction = {() => this.goToHome()} />
        <ScrollView>
          <View style={{padding: 10}}>
            {Object.keys(this.props.cadeiras || {}).map((periodo)=>
              this.renderPeriodo(periodo)
            )}
            
            {/* {this.renderPeriod(1)}

            <Text style={styles.textStyle}>Optativas</Text>
            {this.renderPeriod(0)} */}
          </View>

          <TouchableOpacity style={styles.button} onPress={this.selecionarTudo.bind(this)}>
            <Text style={styles.buttonText}>Selecionar todas as disciplinas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.selecionarCadeirasPorPeriodo.bind(this)}>
            <Text style={styles.buttonText}>Selecionar primeiro período</Text>
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
  const { cadeiras } = state.gradeAntiga;
  return { cadeiras };
};

export default connect(mapStateToProps, {loadGradeAntiga, toggleCadeira, selecionarTodasAsCadeiras, selecionarTodasAsCadeirasDoPeriodo})(GradeAntigaScreen);