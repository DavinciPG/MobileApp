import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {

    },
    paggination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    pagginationLines: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5
    },
    activeLine: {
        backgroundColor: colors.black,
        width: 30
    }
})