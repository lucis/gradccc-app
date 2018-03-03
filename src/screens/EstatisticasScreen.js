import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import { calcularEstatisticas } from '../actions';

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
        this.props.calcularEstatisticas(this.props.cadeirasGradeNova);
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
                <Text style={styles.texto}>Creditos Optativos Específicos:{this.props.creditosOptativosEspecificos}/{this.props.totalCreditosOptativosEspecificos}</Text>
                <Text style={styles.texto}>Creditos Optativos Gerais:{this.props.creditosOptativosGerais}/{this.props.totalCreditosOptativosGerais}</Text>
                <Text style={styles.textoPrincipal}> % do curso concluído</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { cadeirasGradeNova } = state.gradeNova;
    const { 
        creditosObrigatorios,
        totalCreditosObrigatorios,
        creditosOptativosEspecificos,
        totalCreditosOptativosEspecificos,
        creditosOptativosGerais,
        totalCreditosOptativosGerais
    } = state.estatisticas;

    return {
        cadeirasGradeNova,
        creditosObrigatorios,
        totalCreditosObrigatorios,
        creditosOptativosEspecificos,
        totalCreditosOptativosEspecificos,
        creditosOptativosGerais,
        totalCreditosOptativosGerais
    };
}
  
export default connect(mapStateToProps, { calcularEstatisticas })(EstatisticasScreen);