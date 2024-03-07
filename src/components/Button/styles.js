import { StyleSheet } from "react-native"

import { colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        flex: 1
    },
    title: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16
    }
})