import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import axios from 'axios';
import { loadGradeNova } from '../actions';
import Cadeira from '../components/Cadeira';
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

class GradeNovaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.loadGradeNova(this.props.idCadeirasSelecionadas);
  }

  renderPeriodo(periodo) {
    //this.realizaMapeamento();
    const cadeiras = this.props.cadeirasGradeNova[periodo];
    return (
      <View>
        <Text style={styles.textStyle}>{periodo}º período</Text>
        {this.renderDisciplinas(periodo, cadeiras)}
      </View>
    )
  }

  renderDisciplinas(periodo, cadeiras){
    return (cadeiras || []).map((cadeira)=>
      (<Cadeira periodo={periodo} cadeira={cadeira}></Cadeira>)
    );
  }

  goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grande Nova" backFunction = {() => this.goToHome()} />
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