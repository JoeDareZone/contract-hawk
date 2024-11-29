import { Text, View } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'

export default function TabTwoScreen() {
	return (
		<View className='flex-1 items-center justify-center'>
			<Text className='text-xl font-semibold'>Files</Text>
			<View className='my-8 h-1 w-[80%]' />
			<EditScreenInfo path='app/(tabs)/index.tsx' />
		</View>
	)
}
