import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

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

  goToGradeAntiga() {
    const {navigate} = this.props.navigation;
    navigate('GradeAntiga');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tile}>
          <Text>Aqui colocar a abertura do app</Text>
        </View>
        <View style={styles.tile}>
          <TouchableOpacity onPress={() => this.goToGradeAntiga()}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Ir para página de seleção</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeScreen;