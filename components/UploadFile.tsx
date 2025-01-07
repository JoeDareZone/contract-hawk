import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import DocumentPicker, {
	DocumentPickerResponse,
} from 'react-native-document-picker'
import { Extractor, Patterns } from 'react-native-pdf-extractor'
import { Transient } from 'react-native-pdf-extractor/src/types'

export default function UploadFile() {
	const [file, setFile] = useState<DocumentPickerResponse>()
	const [pages, setPages] = useState<number>()
	const [isEncrypted, setIsEncrypted] = useState<boolean>()
	const [uri, setUri] = useState<string>()
	const [time, setTime] = useState<string>()
	const [result, setResult] = useState<string[]>()

	const pickDocument = async () => {
		const pickedFile = await DocumentPicker.pickSingle({
			type: [DocumentPicker.types.allFiles],
		})
		setFile(pickedFile)
	}

	const onResult = (data: Transient | null) => {
		setPages(data?.pages);
		setIsEncrypted(data?.isEncrypted);
		setUri(data?.uri);
		setTime(data?.duration);
		setResult(data?.text as string[]);
	  };

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
			<Pressable
				className='border-2 py-2 px-4 mb-6 rounded-lg bg-slate-600 active:bg-blue-600'
				// onPress={callback}
			>
				<Extractor
					onResult={onResult}
					patterns={Patterns.Common.Email}
					uri={file?.uri}
					title='hi'
				/>
			</Pressable>
			<Text className='text-md text-black'>{file?.name}</Text>
		</View>
	)
}
