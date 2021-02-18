import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Produtos from '../../component/Produtos'

export default function Home() {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image
                    source={require('../../assets/01.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>PRODUTOS</Text>

                <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                    <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.text}>Lançamentos</Text>
               
                <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
                    <Produtos img={require('../../assets/g1.jpg')} cost='R$5.019,00'>
                        Geladeira Brastemp
                    </Produtos>
           
                    <Produtos img={require('../../assets/g2.jpg')} cost='R$1.910,90'>
                        Geladeira Brastemp Branca
                    </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../assets/g3.jpg')} cost='R$2.069,00'>
                        Geladeira Consul
                    </Produtos>
  
                    <Produtos img={require('../../assets/f1.jpg')} cost='R$1.129,00'>
                        Fogão Consul
                    </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../assets/f2.jpg')} cost='R$519,70'>
                        Fogão Atlas
                    </Produtos>
            
                    <Produtos img={require('../../assets/fm1.jpg')} cost='R$R$409,88'>
                        Microondas Consul
                    </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../assets/fm2.jpg')} cost='R$464,53'>
                        microondas Philco
                    </Produtos>
          
                    <Produtos img={require('../../assets/fm3.jpg')} cost='R$436,05'>
                        Microondas Eletrolux
                    </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../assets/ll1.jpg')} cost='R$2.799,90'>
                        Lava Louça Inox
                    </Produtos>
        
                    <Produtos img={require('../../assets/ll2.jpg')} cost='R$1.730,61'>
                        Lava Lava-louça Compacta
                    </Produtos>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../assets/lr1.jpg')} cost='R$1.214,10'>
                        Lava Roupas Brastemp
                    </Produtos>
          
                    <Produtos img={require('../../assets/lr2.jpg')} cost='R$2.179,90'>
                        Lava Roupas Philco
                    </Produtos>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',
        fontWeight: 'bolder',
    },
    line: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2,
    }
});