import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { set } from 'zod';
import Header from '../../components/Header'
import DashboardBody from '../../components/DashboardBody'

export default function Tab() {
    const BASE_URL = "http://192.168.30.52:8080"
    const [token, setToken] = useState("")
    const [profile, setProfile] = useState(() => {})

    useEffect(() => {
        AsyncStorage.getItem("token").then(res => {
            setToken(res)
            const config = {
                headers: {Authorization: `bearer ${token}`}
            }
            console.log(config)
            axios.get(`${BASE_URL}/auth/profile`, config).then(function (res) {
                console.log(res.data)
                setProfile(res.data)
                return res.data
            }).catch(function (error) {
                console.log(error)
            })
        })
    }, [token, setToken, setProfile])

return (
    <View style={styles.container}>
        <Header image={profile?.avatar} fullname={profile?.full_name} />
        {/* Tambahan tampilan sesuai desain, dengan dummy icon */}
        <DashboardBody balance={profile?.balance} accountNo={profile?.id} nickname={profile?.nickname}/>
        <StatusBar style="auto" />
        
        {/* <PrimaryButton/>   */}
        {/* <Input></Input> */}
    </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});
