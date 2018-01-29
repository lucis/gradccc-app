import React, { Component } from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import Spinner from './Spinner';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser } from '../actions';

class CadastroForm extends Component
{
    onEmailChange(text){
        this.props.emailChanged(text);
    };

    onPasswordChange(text){
        this.props.passwordChanged(text);
    };

    onButtonPress(){
        const { email, password } = this.props;

        this.props.registerUser({ email, password });
    };

    renderButton(){
        if(this.props.loading){
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Cadastrar
            </Button>
        );
    };

    render()
    {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@ccc.ufcg.edu.br"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="digite sua senha.."
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.cadastro;

    return{ email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, registerUser })(CadastroForm);
