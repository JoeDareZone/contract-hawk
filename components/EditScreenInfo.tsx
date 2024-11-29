import React from 'react'
import { Text, View } from 'react-native'

export default function EditScreenInfo({ path }: { path: string }) {
	return (
		<View>
			<Text className='text-lg'>Upload a file to get started</Text>
		</View>
	)
}
