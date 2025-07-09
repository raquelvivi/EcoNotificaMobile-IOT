
import { View, StyleSheet, Text } from 'react-native';

import { Lixeira } from '../type'

export default function Lixeiras({ dado }: { dado: Lixeira | null }) {

    if (dado) {
        return (

            <View style={[styles.lixeira]}>
                <Text style={[styles.lixTitulo]}>{dado.nome}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.lixTitulo]}>Nivel: </Text>
                    <Text style={[styles.lixTitulo, { color: "#FF8914" }]}> {dado.situacao} </Text>
                </View>
            </View>
        );
    }

    //Parcial = #FF8914
    //Cheia = #EE0000
    //Vazia = #00A105
}

const styles = StyleSheet.create({


    lixeira: {
        marginBottom: 20,
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        maxWidth: 350,
        minWidth: 250,
    },
    lixTitulo: {
        fontSize: 16,
        maxWidth: 200,
    },
});
