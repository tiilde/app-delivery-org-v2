import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert} from "react-native";
import * as Animatable from 'react-native-animatable';


export default function Cadastrar({ navigation }) {

    const [nome, setNome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const salvarDados = async (usuario) => {
        try {

            await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
            console.log("Dados salvos com sucesso no AsyncStorage");
        } catch (error){
            console.log("Não foi possível salvar os dados!");
        }      
    }

    const salvarENavegar = async () => {

        const nomeLength = nome.length;
        const nomeCompletoLength = nomeCompleto.length;
        const emailLength = email.length;
        const passwordLength = password.length;

        if (nomeLength > 0 && nomeCompletoLength > 0 && emailLength > 0 && passwordLength > 0) {
            const usuario = {
                nome: nome,
                nomeCompleto: nomeCompleto,
                email: email,
                password: password
            }
            await salvarDados(usuario);
            return navigation.navigate("Categorias");

        } else {
            Alert.alert("Erro", "Não foi possível salvar os dados! Preencha os campos", [
                { text: "OK", onPress: () => console.log("Alerta fechado") }
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={500}
                style={styles.containerHeader}
            >
                <Text style={styles.tituloPrincipal}>Preencha seus Dados</Text>
            </Animatable.View>
            <Animatable.View style={styles.containerForm}>
                <Text style={styles.title}>Nome do Usuário</Text>
                <TextInput
                    value={nome}
                    onChangeText={(e) => setNome(e)}
                    style={styles.input}
                    placeholder="Digite seu nome de usuário"
                />
                <Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    value={nomeCompleto}
                    onChangeText={(e) => setNomeCompleto(e)}
                    style={styles.input}
                    placeholder="Digite seu nome completo"
                />
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    style={styles.input}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity 
                    style={styles.buttonCadastrar}
                    onPress={salvarENavegar}
                >
                    <Text style={styles.buttonText}>Cadastrar
                    </Text>
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
    tituloPrincipal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#384169',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonCadastrar: {
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

})
