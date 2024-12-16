import { Stack } from 'expo-router';

export default function Layout() {
return (
<Stack
    screenOptions={{
        headerStyle: {
            backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        }}>
    {/* Optionally configure static options outside the route.*/}
    <Stack.Screen name="(home)" options={{headerShown: false}} />
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="register" options={{headerShown: false}} />
</Stack>
);
}
