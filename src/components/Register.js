import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Item, Input, Label, Form } from 'native-base';

class Register extends Component {
	static navigationOptions = {
		header: null
	}
  	render() {
		const{navigate} = this.props.navigation;
		return (
			<ImageBackground
				source={require('../../src/assets/images/back.jpg')}
				style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerStyle}>
						ENGAPP
					</Text>
					<Text style={styles.subStyle}>
						Register Screen
					</Text>
				</View>
				<View style={styles.inputContainer}>
					<Form style={styles.underlineStyle}>
						<Item stackedLabel>
							<Label style={styles.labelStyle}>
								Username
							</Label>
							<Input 
								style={styles.inputTextStyle}
							/>
						</Item>
					</Form>
					<Form style={styles.underlineStyle}>
						<Item stackedLabel>
							<Label style={styles.labelStyle}>
								Email
							</Label>
							<Input 
								style={styles.inputTextStyle}
								keyboardType='email-address'
							/>
						</Item>
					</Form>
					<Form style={styles.underlineStyle}>
						<Item stackedLabel>
							<Label style={styles.labelStyle}>
								Password
							</Label>
							<Input 
								style={styles.inputTextStyle}
								secureTextEntry
							/>
						</Item>
					</Form>
					<TouchableOpacity style={styles.buttonStyle}
						onPress={() => navigate('Home')}
					>
						<Text style={styles.textStyle}>
							Register
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigate('Login')}
						style={styles.bottomText}
					>
						<Text style={styles.bottomStyle}>
							Already have an Account? <Text style={styles.boldStyle}>Login Here.</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
  	}
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },

    headerContainer:{
        marginTop: 60,
        alignItems: 'center',
    },

    headerStyle:{
        fontFamily: 'Symbol',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
    },

    subStyle:{
        color: 'white',
    },

    inputContainer:{
        paddingHorizontal: 90,
        marginTop: 60,
    },

    underlineStyle:{
        marginTop: 15,
    },

    labelStyle:{
        color: 'white',
    },

    inputTextStyle:{
        color: 'white',
    },

    placeholderStyle:{
        marginLeft: 20,
        color: 'rgba(0,0,0,0.5)'
    },

    buttonStyle:{
        marginTop: 85,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
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
        color: 'rgba(255,255,255,0.5)',
	},
	
	boldStyle:{
		fontWeight: 'bold',
		color: 'rgba(255,255,255,0.8)',
	}
});

export default Register;
