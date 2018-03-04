import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Cadeira from '../components/Cadeira';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
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
  }

  renderPeriodo(periodo) {
    const cadeiras = this.props.cadeiras[periodo];
    var label = periodo=='*' ? 'Optativas' : periodo + 'º período';
    return (
      <View>
          <TouchableOpacity onPress={ () => this.selecionarCadeirasPorPeriodo(periodo) }>
              <Text style={styles.textStyle}>{label}</Text>
          </TouchableOpacity>
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

  selecionarCadeirasPorPeriodo(periodo) {
    const numeroPeriodo = parseInt(periodo);
    this.props.selecionarTodasAsCadeirasDoPeriodo(numeroPeriodo);
  }

  goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home');
  }

  irParaGradeNova() {
    const {navigate} = this.props.navigation;
    navigate('GradeNova');
  }

  mostrarSelecionarTudo() {
    if (this.props.loading && !this.props.cadeiras) return <Spinner size="large" />;

    return(
      <TouchableOpacity style={styles.button} onPress={this.selecionarTudo.bind(this)}>
        <Text style={styles.buttonText}>Selecionar tudo</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grade antiga" backFunction = {() => this.goToHome()} />
        <ScrollView>

        <View style={{padding: 10}}>
          {this.mostrarSelecionarTudo()}
          {Object.keys(this.props.cadeiras || {}).map((periodo)=>
            this.renderPeriodo(periodo)
          )}
        </View>

        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => this.irParaGradeNova()}>
          <Text style={styles.buttonText}>Migrar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = state => {
  const { cadeiras, loading } = state.gradeAntiga;

  return { cadeiras, loading };
};

export default connect(mapStateToProps, {loadGradeAntiga, toggleCadeira, selecionarTodasAsCadeiras, selecionarTodasAsCadeirasDoPeriodo})(GradeAntigaScreen);
