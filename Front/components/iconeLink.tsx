import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    withDelay,
    WithSpringConfig,
    withSpring,
    Easing
} from 'react-native-reanimated';
import { Link } from 'expo-router';

import Feather from 'react-native-vector-icons/Feather';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';





//log-in
//log-out

const DURATION = 400;
const TRANSLATE_Y = -80;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const IconeLink = () => {

    const isOpened = useRef(false);
    const transYCamera = useSharedValue(0);
    const transYsegund = useSharedValue(0);

    const click = useSharedValue(0);


    const opacity = useSharedValue(1);

    const cameraAnimateStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: transYCamera.value },
                { scale: interpolate(transYCamera.value, [TRANSLATE_Y, 0], [1, 0]) }
            ],
        };
    }, []);

    const segundAnimateStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: interpolate(transYsegund.value, [TRANSLATE_Y, 0], [TRANSLATE_Y / 2, 10]) },
                { translateX: interpolate(transYsegund.value, [TRANSLATE_Y, 0], [-60, 0]) },
                { scale: interpolate(transYsegund.value, [TRANSLATE_Y, 0], [1, 0]) }
            ],
        };
    }, []);

    const plusAnimateStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { rotateZ: interpolate(opacity.value, [0, 1], [-90, 0]).toString() + 'deg' },
            ],
        };
    }, []);


    return (
        <View style={styles.container}>
            <Pressable
                onPress={handlePress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.plusButton, { transform: [{ scale: 0.9 }] }]
                        : [styles.plusButton, styles.border]
                }
            >
                <Animated.View style={[plusAnimateStyles]}>
                    <AntDesignIcons name="plus" size={36} color="#ffffff" />
                </Animated.View>

            </Pressable>


            <Animated.View style={[styles.cameraButton, styles.border, cameraAnimateStyles]}>
                <Link href="/senha_email" >
                    <Feather name="user-plus" size={30} color="#ffffff" />
                </Link>
                {/* user-plus do fateer para entrar e user , log-in*/}

            </Animated.View>

            <Animated.View style={[styles.segundButton, styles.border, segundAnimateStyles]}>
                <Link href="/mapa" >
                    <AntDesignIcons name="user" size={30} color="#ffffff" />
                </Link>
                {/* poweroff para sair do email*/}

            </Animated.View>
        </View>
    );

    function handlePress() {
        if (isOpened.current) {

            transYsegund.value = withTiming(0, { duration: DURATION, easing: Easing.bezier(0.36, 0, 0.66, 0.56) });
            transYCamera.value = withDelay(DURATION / 1.5, withTiming(10, { duration: DURATION, easing: Easing.bezier(0.36, 0, 0.66, 0.56) }));
            opacity.value = withTiming(1, { duration: DURATION })

        } else {
            const config: WithSpringConfig = { damping: 12 } // serve para a parada ao abrir, tipo um pong que o objeto da
            transYCamera.value = withSpring(TRANSLATE_Y, config);
            transYsegund.value = withDelay(DURATION / 2, withSpring(TRANSLATE_Y, config));

            opacity.value = withTiming(0, { duration: DURATION })

        }

        isOpened.current = !isOpened.current;
    }
};





const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 90,
        right: -150,

    },
    plusButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        
    },

    cameraButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
    },
    segundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        
    },
    border:{
        // borderWidth: 1,
        // borderColor: "#ffffff",
        borderRadius: 30,
        backgroundColor: '#2E9031',

    }
});

export default IconeLink;



