import { StyleSheet, View, Image } from 'react-native';

export default function ProfilePhoto({avatar}) {
    return (
        <Image
            style={styles.image}
            src={avatar}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: '#19918F',
    },
});