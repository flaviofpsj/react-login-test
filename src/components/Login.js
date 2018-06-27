import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import axios from 'axios';

class Login extends Component {
	static navigationOptions = {
		header: null
	}
	//criando estado padrão
	state = {
		email: '',
		password: '',
	};

	//criando seters, que recebem a mudança de estado
	setEmail = (email) => {
		this.setState({email: email});
	}

	setPassword = (password) => {
		this.setState({password: password});
	}

	//criando a função login
	login = async () => {
		//se os campos estiverem vazios
		if (this.state.email === '' && this.state.password === '') {
			alert('Preencha todos os campos')
		}
		//se o campo de email estiver vazio
		else if (this.state.email === '') {
			alert('Digite o Email')
		}
		//se o campo de senha estiver vazio
		else if (this.state.password === '') {
			alert('Digite a Senha')
		}
		//se os campos estiverem preenchidos
		else {
			try {
				//verifica o valor dos campos
				const res = await axios.post("http://<ip_number>:8080/users/email", {email: this.state.email, password: this.state.password});
				//se estiverem ok ele navega para a Home
				if(res.data.status === 'ok') {
					this.props.navigation.navigate('Home');
				}
				//senão apresenta mensagem de erro
				else {
					alert("Email ou Senha incorretos")
				}
			//erro de conexão
			} catch (error) {
				alert("Error")
			}
		}
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
							//verifica o valor do campo email
							onChangeText={this.setEmail}
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
							//verifica o valor do campo password
							onChangeText={this.setPassword}
							placeholder='Password'
							secureTextEntry
						/>
					</Item>
					<TouchableOpacity style={styles.buttonStyle}
						//executa a função login
						onPress={this.login}
						//onPress={() => navigate('Home')}
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
