import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Cadeira from '../components/Cadeira';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    titulo: {
      fontSize: 25,
      color: '#111'
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

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Grande antiga" />
        <ScrollView>
          <View style={{padding: 10}}>
            {['LPT', 'Cálculo 1', 'Vetorial', 'Prog 1',
             'LP1', 'IC', 'Optativa I', 'Optativa II'].map((nome)=>(
              <Cadeira key={nome} nomeCadeira={nome}/>
            ))}
          </View>
        </ScrollView >
      </View>
    );
  }
}
export default connect()(GradeAntigaScreen);