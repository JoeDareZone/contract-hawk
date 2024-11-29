import React from 'react'
import { Pressable, Text } from 'react-native'
import DocumentPicker from 'react-native-document-picker'

export default async function UploadFile() {
	const pickedFile = await DocumentPicker.pickSingle({
		type: [DocumentPicker.types.allFiles],
	})

	return (
		<Pressable
			className='border-2 py-2 px-4 rounded-lg bg-slate-600 active:bg-blue-600'
			onPress={() => {}}
		>
			<Text className='text-lg text-white'>Upload</Text>
		</Pressable>
	)
}
