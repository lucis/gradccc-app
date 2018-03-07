import React, { Component } from 'react';
import CardSection from './CardSection.js';
import { Text, TouchableWithoutFeedback, View } from 'react-native'; 
import { selecionaPergunta } from '../actions';
import { connect } from 'react-redux';

class Pergunta extends Component{

    renderResposta(){
        const {pergunta, idPerguntaSelecionada} = this.props;
        if(pergunta.id === idPerguntaSelecionada){
            console.log("Entrei:" + idPerguntaSelecionada)
            return (
                <Text>{pergunta.resposta}</Text>
            );
        }
    }
    render (){
        const {titleStyle} = styles;
        const { id, questao } = this.props.pergunta;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selecionaPergunta(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}> {questao} </Text>
                    </CardSection>
                    {this.renderResposta()}
                </View>
            </TouchableWithoutFeedback>
            );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = state => {
    return { idPerguntaSelecionada: state.selecionado}
}

export default connect(mapStateToProps, {selecionaPergunta})(Pergunta);