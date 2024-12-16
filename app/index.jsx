import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Login from './login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function LogoTitle() {
  return (
    <Image style={styles.image} source={require('../assets/icon.png')} />
  );
}

export default function Home() {
  return (
    // <View style={styles.container}>
    //   <Stack.Screen
    //     options={{
    //       title: 'My home',
    //       // headerStyle: { backgroundColor: '#f2f2f2' },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },

    //       headerTitle: props => <LogoTitle {...props} />,
    //     }}
    //   />
    //   <Text>Home Screen</Text>
    //   <Link href={{ pathname: '(home)'}}>Go to home</Link>
    //   <Link href={{ pathname: 'login', params: { name: 'Bacon' } }}>Go to Login</Link>
    //   <Link href={{ pathname: 'register', params: { name: 'Bacon' } }}>Go to Register</Link>
    // </View>
    // <SafeAreaProvider>
    //   <SafeAreaView>
        
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 30,
    resizeMode: 'contain'
  },
});
