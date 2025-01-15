import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

const AuthScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		// Реализация входа пользователя
		console.log('Вход выполнен')
	}

	const handleSignUp = () => {
		// Реализация регистрации пользователя
		console.log('Регистрация выполнена')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.logo}>Ваш Логотип</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder='Email'
					placeholderTextColor='#003f5c'
					onChangeText={setEmail}
					value={email}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					secureTextEntry
					style={styles.inputText}
					placeholder='Password'
					placeholderTextColor='#003f5c'
					onChangeText={setPassword}
					value={password}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
				<Text style={styles.loginText}>Войти</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleSignUp}>
				<Text style={styles.signupText}>Зарегистрироваться</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7C9A92',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#7C9A92',
	},
	logo: {
		fontWeight: 'bold',
		fontSize: 50,
		color: '#253334',
		marginBottom: 40,
	},
	inputView: {
		width: '80%',
		backgroundColor: '#2d2d2d ',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20,
	},
	inputText: {
		fontSize: 20,
		height: 50,
		color: '#2d2d2d',
	},
	loginBtn: {
		width: '80%',
		backgroundColor: '#2d2d2d',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10,
	},
	loginText: {
		color: 'white',
	},
	signupText: {
		color: '#003f5c',
	},
})

export default AuthScreen
