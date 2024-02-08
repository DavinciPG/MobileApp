import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        paddingLeft: 9,
        paddingRight: 9,
        paddingTop: 144
    },
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: 'DM Sans'
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline'
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
});