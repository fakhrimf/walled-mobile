import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Button({text}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        backgroundColor: '#046d00',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
    },
    loginText: {
        fontWeight: 'bold',
        color: "#ffffff",
    },
});

export default Button