import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Alert } from 'react-native';

export default function Login( { navigation }) {
    // estado para armazenar o nomeUsuario e senha
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');

    const salvarEnavegar = async () => {
        // checa se os campos e-mail e senha estão preenchidos
        const nomeLength = nome.length;
        const passwordLength = password.length;
        if (nomeLength > 0 && passwordLength > 0) {
            // armazena os dados do usuário no AsyncStorage
            const usuario = {
                nome: nome,
                password: password
            }
            await salvarDados(usuario);
            // exibir um alerta de sucesso
            console.log('Usuário logado com sucesso!', usuario);

            // redireciona para a tela Home
            return navigation.navigate('Categorias');
        } else {
            // exibir um alerta de erro
            Alert.alert('Dados vazios','Preencha usuário e senha');
        }

    }
    const salvarDados = async (usuario) => {
        try {

            await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
            console.log("Dados salvos com sucesso no AsyncStorage", usuario);

        } catch (error){
            console.log("Não foi possível salvar os dados!");
        }      
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Dados do Usuário</Text>
            </Animatable.View>
            <Animatable.View style={styles.containerForm}>
                <Text style={styles.title}>Usuario</Text>
                <TextInput 
                    style={styles.input}
                    value={nome} 
                    placeholder="Digite seu usuário"
                    onChangeText={(e) => setNome(e)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    value={password}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={salvarEnavegar}
                    >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#384169',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#DAEFE0',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',  
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#384169',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },

});