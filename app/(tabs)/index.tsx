import { Text, View } from 'react-native'

import GetMessage from '@/components/GetMessage'
import UploadFile from '@/components/UploadFile'
import { useCohereAI } from '@/hooks/cohereAI'
import { useEffect } from 'react'
import Config from "react-native-config";

export default function TabOneScreen() {
	const { message } = useCohereAI()

	useEffect(() => {
		console.log('message is', message)
		console.log('AI config is' + JSON.stringify(Config.COHERE_API_KEY))
	}, [message])

	return (
		<View className='flex-1 items-center justify-center'>
			<GetMessage />
			<Text className='text-xl font-semibold'>Home</Text>
			<Text className='text-xl font-semibold'>{message}</Text>
			<View className='my-8 h-1 w-[80%]' />
			<UploadFile />
		</View>
	)
}
