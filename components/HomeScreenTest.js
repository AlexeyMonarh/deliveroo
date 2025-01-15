import React from 'react'
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

const HomeScreenTest = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={styles.container}>
				{/* Баннер */}
				<View style={styles.bannerContainer}>
					<Image
						source={{ uri: 'https://yourimageurl.com/banner.jpg' }}
						style={styles.bannerImage}
					/>
				</View>
				{/* Популярные товары */}
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Популярные товары</Text>
					{/* Список товаров (Это лишь заглушки, данные должны браться из API или стейта) */}
					<ScrollView horizontal>
						<TouchableOpacity
							style={styles.productCard}
							onPress={() => navigation.navigate('ProductDetails')}
						>
							<Image
								source={{ uri: 'https://yourimageurl.com/product1.jpg' }}
								style={styles.productImage}
							/>
							<Text style={styles.productName}>Товар 1</Text>
						</TouchableOpacity>
						{/* Повторять для каждого товара */}
					</ScrollView>
				</View>
				{/* Больше разделов и товаров */}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	bannerContainer: {
		height: 200,
		width: '100%',
	},
	bannerImage: {
		height: '100%',
		width: '100%',
	},
	sectionContainer: {
		padding: 10,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	productCard: {
		width: 160,
		marginRight: 10,
	},
	productImage: {
		width: '100%',
		height: 100,
		marginBottom: 5,
	},
	productName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default HomeScreenTest
