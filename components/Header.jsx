import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import ProfilePhoto from "./ProfilePhoto";
import ThemeToggle from "./ThemeToggle";
export default function Header({image, fullname}) {
    return (
        <View style={styles.Header}>
            <View style={{ flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
                <ProfilePhoto avatar={image}></ProfilePhoto>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>{fullname}</Text>
                    <Text>Personal Account</Text>
                </View>
            </View>
            <ThemeToggle />
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        width: '100%',
        height: 130,
        paddingHorizontal: 16,
        // paddingTop: 36,
        backgroundColor: 'white',
        alignItems: 'flex-end',
        paddingBottom: 20,
        justifyContent: 'space-between',
    }
})