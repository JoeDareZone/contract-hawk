import React, { useState } from 'react'
import { Pressable, Text } from 'react-native'
import DocumentPicker, {
	DocumentPickerResponse,
} from 'react-native-document-picker'

export default function UploadFile() {
	const [file, setFile] = useState<DocumentPickerResponse>()

	const pickDocument = async () => {
		const pickedFile = await DocumentPicker.pickSingle({
			type: [DocumentPicker.types.allFiles],
		})
		setFile(pickedFile)
	}

	return (
		<Pressable
			className='border-2 py-2 px-4 rounded-lg bg-slate-600 active:bg-blue-600'
			onPress={pickDocument}
		>
			<Text className='text-lg text-white'>Upload</Text>
		</Pressable>
	)
}
