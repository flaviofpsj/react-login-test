import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
    Login: {screen: Login},
    Register: {screen: Register},
    Home: {screen: Home},
});

const App = () => {
    return (
        <View style={styles.container}>
            <AppNavigator />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default App;
