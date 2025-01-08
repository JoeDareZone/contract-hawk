import React, { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import { Extractor, Patterns } from 'react-native-pdf-extractor'
import { Transient } from 'react-native-pdf-extractor/src/types'

export default function UploadFile() {
	const [pages, setPages] = useState<number>()
	const [isEncrypted, setIsEncrypted] = useState<boolean>()
	const [uri, setUri] = useState<string>()
	const [time, setTime] = useState<string>()
	const [result, setResult] = useState<string[]>()

	const selectFile = async () => {
		const data = await DocumentPicker.pickSingle({
			presentationStyle: 'fullScreen',
			copyTo: 'cachesDirectory',
			type: 'com.adobe.pdf',
		})

		setUri(data.uri)
	}

	// const pickDocument = async () => {
	// 	const pickedFile = await DocumentPicker.pickSingle({
	// 		type: [DocumentPicker.types.allFiles],
	// 	})
	// 	setFile(pickedFile)
	// }

	const onResult = (data: Transient | null) => {
		console.log('firing onResult', data)
		setPages(data?.pages)
		setIsEncrypted(data?.isEncrypted)
		setUri(data?.uri)
		setTime(data?.duration)
		setResult(data?.text as string[])
	}

	useEffect(() => {
		if (uri) {
			console.log('uri was picked succesfully', uri)
		}
	}, [uri])

	return (
		<View>
			<Pressable
				className='border-2 py-2 px-4 mb-6 rounded-lg bg-slate-600 active:bg-blue-600'
				onPress={selectFile}
			>
				<Text className='text-lg text-white'>Upload</Text>
			</Pressable>
			<Extractor
				onResult={onResult}
				patterns={Patterns.Brazil.BankSlip}
				uri={uri}
				fromIntent
			/>
			<Text>
				{pages} {isEncrypted} {uri} {time} {result}
			</Text>
			<Text className='text-md text-black'>{uri}</Text>
		</View>
	)
}
