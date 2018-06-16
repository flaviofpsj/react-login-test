import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Item, Input, Icon } from 'native-base';

class Login extends Component {
	static navigationOptions = {
		header: null
	}
	render() {
		const{navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image 
						style={styles.imageLogo}
						source={require('../../src/assets/images/logo.png')}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Item style={styles.underlineStyle}>
						<Icon
							style={styles.placeholderStyle}
							type='MaterialIcons'
							name='email'
						/>
						<Input
							placeholder='Email'
							keyboardType='email-address'
						/>
					</Item>
					<Item style={styles.underlineStyle}>                
						<Icon
							style={styles.placeholderStyle}
							type='MaterialIcons'
							name='lock'
						/>
						<Input
							placeholder='Password'
							secureTextEntry
						/>                
					</Item>
					<TouchableOpacity style={styles.buttonStyle}
						onPress={() => navigate('Home')}
					>
						<Text style={styles.textStyle}>
							Login
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.bottomText} onPress={() => navigate('Register')}>
						<Text style={styles.bottomStyle}>
							Not a member yet? <Text style={styles.boldStyle}>Register Here.</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
  	}
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },

    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageLogo:{
        marginTop: 60,
        width: 140,
        height: 161,        
    },

    inputContainer:{
        paddingHorizontal: 80,
        marginTop: 55,
    },

    underlineStyle:{
        marginTop: 30,
        borderColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 25,
    },

    placeholderStyle:{
        marginLeft: 20,
    },

    buttonStyle:{
        marginTop: 82,
        height: 50,
        backgroundColor: '#0c72bb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

    textStyle:{
        color: 'white',
        fontWeight: 'bold',
    },

    bottomText:{
        marginTop: 120,
        alignItems: 'center',
    },

    bottomStyle:{
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
    },
	
	boldStyle:{
		fontWeight: 'bold',
		color: 'rgba(0,0,0,0.6)',
	}
});

export default Login;
