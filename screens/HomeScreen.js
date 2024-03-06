import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
} from 'react-native'
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow.js'
import client from '../sanity.js'

const HomeScreen = () => {
	const navigation = useNavigation()
	const [featuredCategories, setFeaturedCategories] = useState([])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	useEffect(() => {
		client
			.fetch(`*[_type == "restaurant"] {..., restaurant[]->{..., dishes[]->}}`)
			.then(data => {
				setFeaturedCategories(data)
			})
	}, [])

	return (
		<SafeAreaView className='bg-white pt-5'>
			{/* {Header} */}
			<View className='flex-row pd-3 items-center mx-4 mt-2 space-x-2'>
				<Image
					source={{ uri: 'https://links.papareact.com/wru' }}
					className='h-7 w-7 bg-gray-300 p-4 rounded-full'
				/>

				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>Deliver now!</Text>
					<Text className='font-bold text-xl'>
						Current Location
						<ChevronDownIcon size={20} color='#00CCBB' />
					</Text>
				</View>

				<UserIcon size={35} color='#00CCBB' />
			</View>

			{/* Search */}
			<View className='flex-row items-center space-x-2 pb-3 pt-2 mx-4 '>
				<View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
					<MagnifyingGlassIcon color='gray' size={20} />
					<TextInput
						placeholder='Restaurants and cuisines'
						keyboardType='default'
					/>
				</View>
				<AdjustmentsVerticalIcon color='#00CCBB' />
			</View>

			{/* Body */}
			<ScrollView className='bg-gray-100'>
				{/* Categories */}
				<Categories />

				{/* Featured rows */}
				{featuredCategories?.map(category => (
					// console.log(category),
					<FeaturedRow
						key={category._id}
						id={category._id}
						title={category.name}
						description={category.short_description}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
