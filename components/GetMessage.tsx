import useCohereAI from '@/hooks/cohereAI'
import React from 'react'
import { Pressable, Text } from 'react-native'

export default function GetMessage() {
	const { fetchAIResponse } = useCohereAI()

	const getMessage = () => {
		fetchAIResponse('hi').then(res => console.log(res))
	}

	return (
		<Pressable
			className='bg-red-500 m-5 p-5 rounded-md active:opacity-50'
			onPress={getMessage}
		>
			<Text className='text-lg text-white'>Send Message</Text>
		</Pressable>
	)
}
