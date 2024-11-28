import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EditScreenInfo({ path }: { path: string }) {
	return (
		<View>
			<View>
				<Text className='text-lg'>Upload a file to get started</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
})
