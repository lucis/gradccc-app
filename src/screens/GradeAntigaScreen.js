import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Cadeira from '../components/Cadeira';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

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
        <Text style={styles.titulo}>Título</Text>
        <View style={{padding: 10}}>
          {['Cadeira 1', 'Cadeira 2', 'Cadeira 3', 'Cadeira 4'].map((nome)=>(
            <Cadeira nomeCadeira={nome}/>
          ))}
        </View>
      </View>
    );
  }
}
export default connect()(GradeAntigaScreen);