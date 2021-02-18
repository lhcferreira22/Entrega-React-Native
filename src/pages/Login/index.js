import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
  } from 'react-native';


export default function Login() {
    const navigation = useNavigation 

    return (
        <KeyboardAvoidingView style={styles.background}>

  

            <View styles={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCadastro}>
                    <Text style={styles.cadastroText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    submitText: {
        color: '#FFF',
        fontSize: 18
    },
    btnCadastro: {
        marginTop: 10,
    },
    cadastroText: {
        color: '#FFF',
    }

});