import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, ClipPath, Defs, Path, G } from "react-native-svg";
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { useState } from 'react';

const { width } = Dimensions.get("window");
const SIZE = 150; //tamanho da bola
const AnimatedPath = Animated.createAnimatedComponent(Path);

const quanti = 0 
const valor = porcent(quanti)

function porcent(valor: number) {
    if (valor == 0) return 150;
    else if (valor >= 80) return ( 15 - ( valor - 80) );
    else if (valor >= 30) return (70 - (valor - 50)); //(80 - (valor - 45))
    else return (150 - (valor + 20));
}

export default function WaterWaveCircle() {
    const waveOffset = useSharedValue(0);

    useEffect(() => {
        waveOffset.value = withRepeat(
            withTiming(2 * Math.PI, { duration: 10000 }), //velocidade da onda
            -1
        );
    }, []);

    const animatedProps = useAnimatedProps(() => {
        const amplitude = 12; //altura da onda
        const frequency = 1.5;
        const wavePoints = [];

        for (let x = 0; x <= SIZE; x++) {
            const y = amplitude * Math.sin((x / SIZE) * 1 * Math.PI * frequency + waveOffset.value);
            wavePoints.push(`${x},${valor - y}`); //2 {} é a altura do liquido
        }

        const path = `
      M${wavePoints.join(" ")}
      L${SIZE},${SIZE}
      L0,${SIZE}
      Z
    `;



        return {
            d: path,
        };
    });

    return (
        <View style={styles.container}>
            <Svg height={SIZE} width={SIZE} style={styles.bola}>
                <Defs >
                    <ClipPath id="clip" >
                        <Circle  cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2} />
                    </ClipPath>
                </Defs>

                {/* Fundo do círculo */}
                <Circle 
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={SIZE / 2}
                    fill="#FFA726"
                    opacity={0.3}
                />

                {/* Onda */}
                <G clipPath="url(#clip)" >
                    <AnimatedPath animatedProps={animatedProps} fill="#FFA726" />
                </G>

                {/* Texto */}
                <Text style={styles.text}>{quanti}%</Text>
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,

    },
    text: {
        position: "absolute",
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        top: SIZE / 2 - 20,
        right: SIZE / 2 - 30,
    },
    bola:{
        borderWidth: 2,
        borderColor: '#000000'
    },
});
