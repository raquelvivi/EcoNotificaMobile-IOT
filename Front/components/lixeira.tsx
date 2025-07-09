
import { View, StyleSheet, Text } from 'react-native';


export default function Lixeiras({ dado = {} }) {


    return (

        <View style={[styles.lixeira]}>
            <Text style={[styles.lixTitulo]}>{dado.nome}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.lixTitulo]}>Nivel: </Text>
                <Text style={[styles.lixTitulo, { color: "#FF8914" }]}> {dado.nivel} </Text>
            </View>
        </View>
    );

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
