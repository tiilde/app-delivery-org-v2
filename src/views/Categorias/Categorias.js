import React, { useState, useEffect} from "react";
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

// import iconeFrutas from '../../assets/frutas/iconeFrutas.png';

export default function Categorias({ navigation }) {


    const [nome, setNome] = useState("");

    // inicializando a função que recupera os dados do usuário

    // recuperar nome no async storage
    useEffect(() => {
        // recuperar nome no async storage
        getUser();
    }, []);

    // função que recupera os dados
    const getUser = async () => {
        try {
            const usuario = await AsyncStorage.getItem("usuario");
            const parsedUser = JSON.parse(usuario);
            setNome(parsedUser.nome);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require("../../assets/bgCategoria.png")}
                style={styles.bgCategorias}
                resizeMode="cover"
                blurRadius={3}
                opacity={0.8}
                >
               <View style={styles.containerCategoria}>
               <Animatable.View animation="fadeInLeft" delay={500} style={styles.messageContainer}>
                    <Text style={styles.message}>Bem vindo(a) {nome} !</Text>
                </Animatable.View>
                    <TouchableOpacity
                        style={styles.buttonCategoria}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("Frutas")}
                    >
                        <Image
                            source={require("../../assets/frutas/iconeFrutas.png")}
                            style={styles.buttonImageIcon}
                        />
                        <View style={styles.buttonIconSeparator} />
                        <Text style={styles.buttonText}>Frutas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCategoria}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("Verduras")}
                    >
                        <Image
                            source={require("../../assets/verduras/iconeVerduras.png")}
                            style={styles.buttonImageIcon}
                        />
                        <View style={styles.buttonIconSeparator} />
                        <Text style={styles.buttonText}>Verduras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCategoria}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("Legumes")}
                    >
                        <Image
                            source={require("../../assets/legumes/iconeLegumes.png")}
                            style={styles.buttonImageIcon}
                        />
                        <View style={styles.buttonIconSeparator} />
                        <Text style={styles.buttonText}>Legumes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonVoltar}
                        onPress={() => navigation.navigate("BoasVindas")}
                    >
                        <Image
                            source={require("../../assets/botaoVoltar.png")}
                            style={styles.buttonImageIconVoltar}
                        />
                        <Text style={styles.buttonTextVoltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        
    },
    messageContainer: {
        marginLeft: '5%',
        paddingStart: '10%',
        paddingBottom: '10%',
    },
  
    message: {    
        fontSize: 20,
        fontWeight: 'bold',
        color: '#384169',
        marginTop: 20,
        botton: 20,
    },
    bgCategorias: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    containerCategoria: {
        flex: 4,
        // margin: 10,
        marginTop: 100,
        padding: 30,
        backgroundColor: '#DAEFE0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonCategoria: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#384169',
        borderWidth: 0.5,
        borderColor: '#FFF',
        height: 70,
        borderRadius: 5,
        margin: 10,
        // marginTop: 100,
    },
    buttonImageIcon: {
        padding: 20,
        margin: 20,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
    },
    buttonIconSeparator: {
        backgroundColor: '#FFF',
        width: 3,
        height: 70,
    },
    buttonText:{
        color: '#FFF',
        marginBottom: 4,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonVoltar: {      
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#FFF',
        borderShadowColor: '#000',
        height: 55,
        borderRadius: 5,
        bottom: -150,
    },
    buttonTextVoltar: {
        color: '#384169',
        marginBottom: 0.5,
        marginLeft: 55,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonImageIconVoltar: {
        padding: 15,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
});

