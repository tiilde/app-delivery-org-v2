import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Image, View } from 'react-native';

import { Separador } from './components/ItemSeparador';



import frutas from '../../data/frutasDados';


const Item = ({ nome, imagem, preco }) => (
    <SafeAreaView>
        <View style={styles.item}>
            <Image source={imagem} style={styles.imagem} />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
    </SafeAreaView>
);



export default function Frutas() {
    // renderizando os itens da lista
    const renderItem =({ item }) => (
        <Item nome={item.nome} imagem={item.imagem} preco={item.preco} />
    )

    return (
        <SafeAreaView>
            <Text style={styles.titulo}> Frutas </Text>


            <FlatList
                data={frutas}
                ItemSeparatorComponent={Separador}
                renderItem={renderItem}
                keyExtractor={(item) => item.nome}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#476079',
        textAlign: 'center',
    },
    nome: {
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 50,
        color: "#384169",
    },
    preco: {
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 60,
        color: "#384169",
        fontWeight: 'bold',

    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 20,
        marginHorizontal: 20,
        alignItems: "center",
    },
    imagem: {
        width: 50,
        height: 50,
    },
    nome: {
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 25,
        color: "#384169",
    },

})






