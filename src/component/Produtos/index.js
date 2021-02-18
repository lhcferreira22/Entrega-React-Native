import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Produtos(props) {
    return (
        <TouchableOpacity>
            <Image
                source={props.img}
                style={styles.produtosImg}
            />
            <Text style={styles.produtosText}>
                {props.children}
                </Text>
            <View opacity= {0.4}>
                <Text style={styles.produtosText}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    produtosImg: {
        width: 150,
        height: 150,
        margin: 20
        
    },

    produtosText: {
        fontSize: 16,
        textAlign: 'center'
    }


})
