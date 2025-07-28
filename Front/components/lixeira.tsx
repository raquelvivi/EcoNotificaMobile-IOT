
import { View, StyleSheet, Text } from 'react-native';

import { Lixeira } from '../type'
import { Link } from 'expo-router';

export default function Lixeiras({ dado }: { dado: Lixeira | null }) {

    const getCorSituacao = (situacao = '') => {
        switch (situacao?.toLowerCase()) {
            case 'parcial':
                return '#FF8914'; // laranja
            case 'cheia':
                return '#EE0000'; // vermelho
            case 'vazia':
                return '#00A105'; // verde
            default:
                return '#8A2BE2'; // violeta (para outros casos)
        }
    };

    if (dado) {

        return (
            <Link href={{
                pathname: '/descricao/[id]',
                params: { id: dado.id }
            }} style={[styles.lixeira]}>
                <View >

                    <Text style={[styles.lixTitulo]}>{dado.nome}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.lixTitulo]}>Nivel: </Text>
                        <Text
                            style={[
                                styles.lixTitulo,
                                { color: getCorSituacao(dado.situacao) }
                            ]}
                        >
                            {dado.situacao}
                        </Text>

                    </View>

                </View>

            </Link>
        );
    }


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
