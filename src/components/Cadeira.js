import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container:{
        padding: 20,
        margin: 10,
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'transparent',
        borderRadius: 4, borderWidth: 2, borderColor: '#d6d7da',
    },
    containerSelecionado: {
        padding: 20,
        margin: 10,
        flexDirection: 'row',
        height: 70,
        borderRadius: 4, borderWidth: 2, borderColor: '#fff',
        backgroundColor: '#069'
    },
    texto: {
      fontSize: 20
    },
    textoSelecionado: {
        fontSize: 20,
        color: '#fff'
    }
});

class Cadeira extends Component{

    componentWillMount() {
        this.setState({
            selecionado: false
        });
    };

    componentWillReceiveProps(nextProps) {
        const { selecionado } = this.state;
        this.setState({selecionado: nextProps.selecionar});
    }

    selecionou() {
        // const { selecionado } = this.state;
        // this.setState({selecionado: !selecionado});
        const { periodo, cadeira } = this.props;
        this.props.selecionar(periodo, cadeira['id_disc']);
    }

    render() {
        return (
        <TouchableOpacity onPress={this.selecionou.bind(this)}>
            <View style={(this.props.cadeira.selecionada) ? styles.containerSelecionado : styles.container}>
                <Text style={(this.props.cadeira.selecionada) ? styles.textoSelecionado : styles.texto}>{this.props.cadeira.nome}</Text>
            </View>
        </TouchableOpacity>);
    };
}

// Cadeira.prototype = {
//     nomeCadeira: React.PropTypes.string
// };

export default Cadeira;