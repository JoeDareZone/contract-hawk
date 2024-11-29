import { StatusBar } from 'expo-status-bar'
import { Platform, Text, View } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'

export default function ModalScreen() {
	return (
		<View className='items-center flex-1 justify-center'>
			<Text className='text-xl font-semibold'>Modal</Text>
			<View className='my-8 h-1 w-[80%]' />
			<EditScreenInfo path='app/modal.tsx' />

			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	)
}
