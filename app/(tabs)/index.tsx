import { Text, View } from 'react-native'

import GetMessage from '@/components/GetMessage'
import UploadFile from '@/components/UploadFile'

export default function TabOneScreen() {
	return (
		<View className='flex-1 items-center justify-center'>
			<GetMessage />
			<Text className='text-xl font-semibold'>Home</Text>
			<View className='my-8 h-1 w-[80%]' />
			<UploadFile />
		</View>
	)
}
