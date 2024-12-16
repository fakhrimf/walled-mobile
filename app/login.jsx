import { StatusBar } from 'expo-status-bar';
import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Button from '../components/Button';
import { set, z } from 'zod';
import { useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailError, setEmailError] = useState(true)
    const [isPasswordError, setPasswordError] = useState(true)
    const BASE_URL = "http://192.168.30.52:8080"
    const navigate = useNavigation()

    const emailValidation = z.object({
        email: z.string().email(),
    })

    const passValidation = z.object({
        password: z.string().min(5)
    })

    const press = async () => {
        const parseEmail = emailValidation.safeParse(
            {
                email: email,
            }
        )
        setEmailError(parseEmail.success)
        const parsePassword = passValidation.safeParse(
            {
                password: password,
            }
        )
        setPasswordError(parsePassword.success)
        if (parseEmail.success && parsePassword.success) {
            axios.post(`${BASE_URL}/auth/login`, {
                email: email,
                password: password
            }).then(function (res) {
                console.log(res.data.token)
                navigate.navigate('(home)')
                AsyncStorage.setItem('token', res.data.token)
            }).catch(function (error) {
                Alert.alert("Login Failed!", `${error.response.data.message}`)
                AsyncStorage.clear()
            });
        }
    }

    const check = async () => {
        Alert.alert('Storage Check', await AsyncStorage.getItem("token"))
    }

    return (
        <View style={[styles.container, {flexDirection: 'column'}]}>
            <StatusBar style="dark" />
            {/* <Image source={require('./assets/logo-lg.png')} style={{width: 200, height: 200, resizeMode: 'contain',}} /> */}
            <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/grab_logo_icon_171051.png'}} style={{width: 200, height: 200, resizeMode: 'contain'}} />

            <TextInput style={styles.input} onChangeText={text => {setEmail(text)}} placeholder='Email' keyboardType='email-address' />
            <TextInput style={styles.input} onChangeText={text => {
                setPassword(text)
                }} placeholder='Password' secureTextEntry={true} />
            <View style={styles.box_left}>
                <Text style={isEmailError ? styles.error_hidden : styles.error}>Wrong email format</Text>
                <Text style={isPasswordError ? styles.error_hidden : styles.error}>Password must be 8 or more characters</Text>
            </View>
            <Button text='Login' onPress={press}/>
            <Button text='Check Storage' onPress={check}/>
            <View style={styles.box_left}>
                <Text>Don't have an account? <Link href={{ pathname: 'register', params: { name: 'Bacon' } }} style={styles.link_text}>Register Here</Link></Text>
            </View>
        </View>
        );
    }

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 15,
    },
    error_hidden: {
        opacity: "0",
        fontSize: 15,
    },
    link_text : {
        color: '#046d00', 
        fontWeight: 'bold'
    },
    box_left: {
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
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
});
