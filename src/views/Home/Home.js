import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    // armazenando dados
    const [nome, setNome] = useState('');

    // inicializando a função que recupera os dados do usuário

    // recuperar nome no async storage
    useEffect(() => {
        // recuperar nome no async storage
        getUser();
    }, []);

    // função que recupera os dados
    const getUser = async () => {
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            const parsedUser = JSON.parse(usuario);
            setNome(parsedUser.nome);
        }
        catch (error) {

            console.log(error);
        }
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Olá {nome}! :D</Text>
            <Text>Esta página está em construção ^_^</Text>
            <Button title='Voltar' onPress={() => navigation.navigate('BoasVindas')} />
        </View>
    )
}

