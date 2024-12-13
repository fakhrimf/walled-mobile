import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <StatusBar style="dark" />
      <Image source={require('./assets/logo-lg.png')} style={{width: 200, height: 200, resizeMode: 'contain',}} />
      <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: '800',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 100,
    padding: 35,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    margin: 10,
    backgroundColor: '#4DB6AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    color: "#fff",
  },
});
