import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';

//log-in

//log-out

const DURATION = 400;
const TRANSLATE_Y = -80;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const IconeLink = () => {

    const isOpened = useRef(false);
    const transYCamera = useSharedValue(0);

    const cameraAnimateStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: transYCamera.value },
                {scale: interpolate(transYCamera.value, [TRANSLATE_Y, 0], [1,0])}
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
                        : styles.plusButton
                }
            >
                <AntDesignIcons name="plus" size={36} color="white" />
            </Pressable>

            <Animated.View style={[styles.cameraButton, cameraAnimateStyles]}>
                <AntDesignIcons name="camera" size={28} color="white" />
            </Animated.View>
        </View>
    );

    function handlePress() {
    if (isOpened.current) {
        transYCamera.value = withTiming(0, { duration: DURATION });
    } else {
        transYCamera.value = withTiming(TRANSLATE_Y, { duration: DURATION });
    }

    isOpened.current = !isOpened.current;
}
};





const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        right: 30,
    },
    plusButton: {
        width: 60,
        height: 60,
        backgroundColor: '#ed2800',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cameraButton: {
        width: 50,
        height: 50,
        backgroundColor: '#ed2800',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1,
    },
});

export default IconeLink;



