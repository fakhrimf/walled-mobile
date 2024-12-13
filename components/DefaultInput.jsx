import { StyleSheet, View, Text, TextInput } from 'react-native';
function DefaultInput({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextInput style={styles.input} placeholder={text} keyboardType='email-address' />
        </View>
    )
}

const styles = StyleSheet.create({    
    text: {
        color: "#8b8b8b",
    },
    input: {
        width: '100%',
        height: 50,
        borderBottomColor: '#707070',
        borderBottomWidth: 0.5,
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    container: {
        flex: 1,
        width: "100%",
        fontWeight: '800',
        backgroundColor: '#f2f2f2',
        alignItems: 'flex-start',
    },
});

export default DefaultInput