import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import client from '../sanity'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		client
			.fetch(
				`
		*[ _type == "featured" && _id == $id ] {
			...,
				restaurants[]->{
				...,
				 dishes[]->,
				  type->{
						name
					}
				},
			}[0]
		`,
				{ id }
			)
			.then(data => {
				setRestaurants(data?.restaurants)
			})
	}, [])

	// console.log(restaurants)

	return (
		<View>
			<View className='mt-4 flex-row items-center justify-between px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<ArrowRightIcon color='#00CCBB' />
			</View>

			<Text className='text-xs px-4 text-gray-500'>{description}</Text>

			<ScrollView
				contentContainerStyle={{ paddingHorizontal: 15 }}
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pt-4'
			>
				{/* RestaurantCards... */}

				{restaurants?.map(restaurant => (
					// console.log(restaurant.image),
					<RestaurantCard
						key={restaurant._id}
						id={restaurant._id}
						imgUrl={restaurant.image}
						title={restaurant.name}
						rating={restaurant.rating}
						genre={restaurant.type?.name}
						address={restaurant.address}
						short_description={restaurant.short_description}
						dishes={restaurant.dishes}
						long={restaurant.long}
						lat={restaurant.lat}
					/>
				))}
				{/* 
				<RestaurantCard
					id={1}
					imgUrl='https://links.papareact.com/gn7'
					title='Yo! Sushi'
					rating={4.5}
					genre='Japanese'
					address='123 Main St'
					short_description='This is a Test description'
					dishes={[]}
					long={20}
					lat={0}
				/>
				<RestaurantCard
					id={1}
					imgUrl='https://links.papareact.com/gn7'
					title='Yo! Sushi'
					rating={4.5}
					genre='Japanese'
					address='123 Main St'
					short_description='This is a Test description'
					dishes={[]}
					long={20}
					lat={0}
				/> */}
			</ScrollView>
		</View>
	)
}

export default FeaturedRow
