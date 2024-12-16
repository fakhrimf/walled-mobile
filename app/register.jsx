import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Button from '../components/Button';
import Checkbox from 'expo-checkbox';


export default function Register() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);
    return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
        <StatusBar style="dark" />
        {/* <Image source={require('./assets/logo-lg.png')} style={{width: 200, height: 200, resizeMode: 'contain',}} /> */}
        <Image source={{uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/grab_logo_icon_171051.png'}} style={{width: 200, height: 200, resizeMode: 'contain'}} />

        <Modal
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                setChecked(true);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <ScrollView style={{marginBottom: 10}}>
                    <Text style={styles.modalText}>Terms and Conditions</Text>
                    <View style={{
                        backgroundColor: '#000',
                        height: 1,
                        width: '100%',
                        marginBottom: 10,
                    }}/>
                    <Text style={styles.paragraph}>
                        You need an EA Account to access and use many EA Services, including to play online.
                        To create an EA Account, you must have a valid email address, and provide truthful and accurate information. You must be eligible to use the EA Service for which you are registering and must be a resident of a country where use of EA Services is permitted.
                        You must be at least 13 years of age (or the minimum age of your country of residence) to create an EA Account. If your age is between the relevant minimum age and 18 (or the age of majority where you live), you and your parent or guardian must review and agree to this Agreement together. Parents and guardians are responsible for the acts of children under 18 years of age when using EA Services. EA recommends that parents and guardians familiarize themselves with parental controls on devices they provide their child.
                        You are responsible for the activity on your EA Account; it’s yours, don’t share it. Your EA Account may be suspended or terminated if someone else uses it to engage in activity that violates this Agreement.
                        You may cancel your EA Account or a subscription to an EA Service at any time by contacting EA's Customer Service Department at help.ea.com. To complete your request, EA may collect fees or costs incurred, if allowed by law, and any amounts owed to third-party vendors or content providers.
                        The EA Services are licensed to you, not sold. EA grants you a personal, limited, non-transferable (i.e., not for sharing), revocable and non-exclusive license to use the EA Services to which you have access for your non-commercial use, subject to your compliance with this Agreement. You may not access, copy, modify or distribute any EA Service, Content or Entitlements (as those terms are defined below), unless expressly authorized by EA or permitted by law. You may not reverse engineer or attempt to extract or otherwise use source code or other data from EA Services, unless expressly authorized by EA or permitted by law. EA or its licensors own and reserve all other rights, including all right, title and interest in the EA Services and associated intellectual property rights.
                        The EA Services include Content and Entitlements. Content is the software, technology, text, forum posts, chat posts, profiles, widgets, messages, links, emails, music, sound, graphics, pictures, video, code, and all audio visual or other material appearing on or coming from EA Services, as well as the design and appearance of our websites. Content also includes user-generated Content ("UGC"). UGC includes EA Account personas, forum posts, profile content, a player’s voice or other audio transmitted as part of social features available in or through EA Services, images or other visual material submitted or otherwise contributed to or through EA Services, and other Content contributed by users to EA Services. All Content is either owned by EA or its licensors, or is licensed to EA and its licensors pursuant to Section 5 below.
                        Entitlements are rights that EA licenses to you to access or use the online or off-line elements of EA Services. Examples of Entitlements include access to digital or unlockable Content; additional or enhanced functionality (including multiplayer services); subscriptions; virtual assets; unlock keys or codes, serial codes or online authentication; in-game accomplishments; and virtual points, coins, or currencies.
                        We refer to these virtual points, coins or currencies as "EA Virtual Currency". When you obtain EA Virtual Currency from us or our authorized partners, you receive a personal, limited, non-assignable, non-exclusive, revocable license to access and select the Entitlements that EA expressly makes available to you.
                        EA Virtual Currency has no monetary value and has no value outside of our products and services. EA Virtual Currency cannot be sold, traded, transferred, or exchanged for cash; it only may be redeemed for Entitlements available for the EA Service. EA Virtual Currency is non-refundable, and you are not entitled to a refund for any unused EA Virtual Currency. Once you redeem EA Virtual Currency for an Entitlement, that Entitlement is not returnable, exchangeable, or refundable. If you live in Japan, you agree to use any EA Virtual Currency within 180 days from the date of purchase.
                        You will provide at your own expense the equipment, Internet connection and charges required to access and use EA Services.
                        We do not guarantee that any EA Service, Content or Entitlement will be available at all times, in all locations, or at any given time or that we will continue to offer a particular EA Service, Content or Entitlements for any particular length of time. EA does not guarantee that EA Services can be accessed on all devices, by means of a specific Internet or connection provider, or in all geographic locations.
                        From time to time, EA may update or modify an EA Service, Content or Entitlements, and/or you may lose access to certain Content or Entitlements without notice if, at our discretion, we must remove such Content or Entitlements from the EA Services, for legal, contractual and licensing obligations, technical limitations, or if the Content or Entitlements could harm EA’s reputation. Updates and modifications may be required in order to continue to use EA Services.
                        EA may need to update, or reset certain parameters to balance game play and usage of EA Services. These updates or "resets" may cause you setbacks within the relevant game world and may affect characters, games, groups or other Entitlements under your control.
                        EA may also take actions on your EA Account and Entitlements without notice to you to protect you or EA, such as preventing unauthorized access, resetting EA Account passwords, suspending EA Account access, deleting data or removing EA Accounts from EA Services. Your availability to EA Services may also be affected in response to actual or suspected Rules of Conduct violations, as further described in Section 6.
                    </Text>
                </ScrollView>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                        // Alert.alert('Modal has been closed.')
                        setChecked(true)
                    }}>
                    <Text style={styles.textStyle}>Saya Mengerti</Text>
                </Pressable>
                </View>
            </View>
        </Modal>

        <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
        <TextInput style={styles.input} placeholder='Full Name' keyboardType='default' />
        <TextInput style={styles.input} placeholder='Nickname' keyboardType='default' />
        <TextInput style={styles.input} placeholder='Avatar URL' keyboardType='default' />
        <View style={styles.box_left}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={() => {
                    // if (isChecked) {
                    //     setChecked(!isChecked)
                    // } else {
                    //     setModalVisible(!modalVisible)
                    // }
                    setChecked(!isChecked)
                }}
                color={isChecked ? '#046d00' : undefined}
            />
            <Pressable 
                style={styles.pressable}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text>
                    I have read the<Text style={styles.link_text}> terms and conditions </Text>
                </Text>
            </Pressable>
        </View>
        <Button text='Register'/>
    </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        marginTop: 50,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#046d00',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressable: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
    },
    link_text : {
        color: '#046d00', 
        fontWeight: 'bold',
        fontSize: 15,
    },
    box_left: {
        width: '100%',
        // height: 0,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    paragraph: {
        fontSize: 15,
        textAlign: 'justify'
    },
    checkbox: {
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        fontWeight: '800',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
