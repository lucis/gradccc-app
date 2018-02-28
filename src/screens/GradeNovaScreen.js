import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import axios from 'axios';
import { loadGradeNova } from '../actions';
import Cadeira from '../components/Cadeira';
import Header from '../components/Header';
import Button from '../components/Button';
import CadeiraNovaGrade from '../components/CadeiraNovaGrade';

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

class GradeNovaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.loadGradeNova(this.props.idCadeirasSelecionadas);
  }

  renderPeriodo(periodo) {
    const cadeiras = this.props.cadeirasGradeNova[periodo];
    return (
      <View>
        <Text style={styles.textStyle}>{periodo === "*" ? "Optativas" : `${periodo}º período`}</Text>
        {this.renderDisciplinas(periodo, cadeiras)}
      </View>
    )
  }

  renderDisciplinas(periodo, cadeiras){
    return (cadeiras || []).filter(cadeira => (periodo === "*" && cadeira.selecionada || periodo !== "*"))
                          .map((cadeira) => (<CadeiraNovaGrade periodo={periodo} cadeira={cadeira}></CadeiraNovaGrade>)
    );
  }

  goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home');
  }


  realizaMapeamento() {
    /*const cadeirasSelecionadas = "";
    const todasCadeiras = {...this.props.cadeiras};
    Object.keys(todasCadeiras).forEach((periodo) => {
      const cadeirasPorPeriodo = todasCadeiras[periodo];
      cadeirasPorPeriodo.forEach(cadeira => {
          console.log(cadeira);
      });
    });
    const requisicao = 'http://192.168.15.16:5002/map?disciplinas=' + cadeirasSelecionadas;
    axios.get(requisicao)
          .then(function (response) {

          })
          .catch(function (error) {
          });*/
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grade Nova" backFunction = {() => this.goToHome()} />
        <ScrollView>
          <View style={{padding: 10}}>
            {Object.keys(this.props.cadeirasGradeNova || {}).map((periodo)=>
              this.renderPeriodo(periodo)
            )}
          </View>

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { cadeirasGradeNova } = state.gradeNova;
  const { idCadeirasSelecionadas } = state.gradeAntiga;
  return { cadeirasGradeNova, idCadeirasSelecionadas };
};

export default connect(mapStateToProps, { loadGradeNova })(GradeNovaScreen);
