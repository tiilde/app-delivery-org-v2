import * as React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import BemVindo from "./src/views/BoasVindas/BemVindo";
import Login from "./src/views/Login/Login";
import Cadastro from "./src/views/Cadastro/Cadastro";
import ListaCategorias from "./src/views/Categorias/Categorias";
import ListaFrutas from "./src/views/Listas/ListaFrutas";
import ListaLegumes from "./src/views/Listas/ListaLegumes";
import ListaVerduras from "./src/views/Listas/ListaVerduras";




const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#38A69D" />
            <Stack.Navigator>
                <Stack.Screen
                    name="BoasVindas"
                    component={BemVindo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}        
                />
                <Stack.Screen
                    name="Categorias"
                    component={ListaCategorias}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Frutas"
                    component={ListaFrutas}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Legumes"
                    component={ListaLegumes}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Verduras"
                    component={ListaVerduras}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
