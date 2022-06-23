import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';

import { Separador } from './components/ItemSeparador'; 

import verduras from '../../data/verdurasDados';


const Item = ({ nome, imagem, preco }) => (
    <SafeAreaView>
        <View style={styles.item}>
            <Image source={imagem} style={styles.imagem} />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
    </SafeAreaView>
);

export default function Verduras() {
    // renderizando os itens da lista
    const renderItem =({ item }) => (
        <Item nome={item.nome} imagem={item.imagem} preco={item.preco} />
    )

    return(
        <View>
            <Text style={styles.titulo}> Verduras </Text>
            <FlatList
                data={verduras}
                ItemSeparatorComponent={Separador}
                renderItem={renderItem}
                keyExtractor={item => item.nome}
            />
        </View>
    )

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
})