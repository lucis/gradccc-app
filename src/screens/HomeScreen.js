import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'row',
        height: 100
    },
    tile: {
      flex: 0.5,
      backgroundColor: '#069'
    }
});
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tile}>
          <Text>Aqui colocar a abertura do app</Text>
        </View>
        <View style={styles.tile}>
          <TouchableOpacity onPress={() => this.goToLogin()}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Ir para página de seleção</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect()(HomeScreen);