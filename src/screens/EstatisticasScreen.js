import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import { calcularCreditosOptativos } from '../actions';

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'column',
        flex: 1
    },
    texto: {
        padding: 10,
        fontSize: 18
    },
    textoPrincipal: {
        padding: 10,
        fontSize: 25
    }
});

class EstatisticasScreen extends React.Component {
    static navigationOptions = {
      header: null
    };

    componentWillMount(){
        this.props.calcularCreditosOptativos(this.props.cadeirasGradeNova);
    }

    irParaGradeNova() {
        const {navigate} = this.props.navigation;
        navigate('GradeNova');
    }

    render(){
        return(
            <View style={styles.container}>
                <Header headerText="Detalhes" backFunction = {() => this.irParaGradeNova()} />
                <Text style={styles.texto}>Creditos Obrigatórios:{this.props.creditosObrigatorios}/{this.props.totalCreditosObrigatorios}</Text>
                <Text style={styles.texto}>Creditos Optativos Específicos:</Text>
                <Text style={styles.texto}>Creditos Optativos Gerais:</Text>
                <Text style={styles.textoPrincipal}> % do curso concluído</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { cadeirasGradeNova } = state.gradeNova;
    const { creditosObrigatorios, totalCreditosObrigatorios } = state.estatisticas;

    return { cadeirasGradeNova, creditosObrigatorios, totalCreditosObrigatorios };
}
  
export default connect(mapStateToProps, { calcularCreditosOptativos })(EstatisticasScreen);