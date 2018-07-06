import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

class Home extends Component {
	static navigationOptions = {
		header: null
	}
	render() {
		const{navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				<StatusBar
					barStyle='dark-content'
					translucent={true}
					backgroundColor='transparent'
				/>
				<View style={styles.inputContainer}>
					<TouchableOpacity style={styles.singleButtonStyle}
						onPress={() => alert('Engapp Rules')}
					>
						<Text style={styles.textStyle}>
							Click Here
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginButtonStyle}
						onPress={() => navigate('Login')}
					>
						<Text style={styles.textStyle}>
							Back to Login
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.registerButtonStyle}
						onPress={() => navigate('Register')}
					>
						<Text style={styles.textStyle}>
							Back to Register
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

	inputContainer:{
		paddingHorizontal: 80,
		marginTop: 220,
	},

	singleButtonStyle:{
		marginTop: 30,
		height: 50,
		backgroundColor: '#fecb89',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
	},
	
	loginButtonStyle:{
		marginTop: 30,
		height: 50,
		backgroundColor: '#fb6f92',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
	},
	
	registerButtonStyle:{
		marginTop: 30,
		height: 50,
		backgroundColor: '#60428a',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
	},
	
	textStyle:{
		color: 'white',
		fontWeight: 'bold',
	}
});

export default Home;
