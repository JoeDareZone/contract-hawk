import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
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

	useEffect(() => {
		console.log('file was picked succesfully', file)
	}, [file])

	return (
		<View>
			<Pressable
				className='border-2 py-2 px-4 mb-6 rounded-lg bg-slate-600 active:bg-blue-600'
				onPress={pickDocument}
			>
				<Text className='text-lg text-white'>Upload</Text>
			</Pressable>
			<Text className='text-md text-black'>{file?.name}</Text>
		</View>
	)
}
