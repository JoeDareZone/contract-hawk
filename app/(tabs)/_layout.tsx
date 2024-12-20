import { Link, Tabs } from 'expo-router'
import { File, Home, Info } from 'lucide-react-native'
import React from 'react'
import { Pressable } from 'react-native'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'black',
				headerRight: () => (
					<Link href='/modal' asChild>
						<Pressable>
							{({ pressed }) => (
								<Info
									color={'red'}
									style={{
										marginRight: 15,
										opacity: pressed ? 0.5 : 1,
									}}
								/>
							)}
						</Pressable>
					</Link>
				),
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: () => <Home />,
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: 'Files',
					tabBarIcon: () => <File color='#3e9392' />,
				}}
			/>
		</Tabs>
	)
}
