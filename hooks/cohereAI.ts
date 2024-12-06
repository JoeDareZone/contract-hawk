import { CohereClient } from 'cohere-ai'
import { useState } from 'react'
import Config from 'react-native-config'

const useCohereAI = () => {
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	const fetchAIResponse = async (userMessage: string) => {
		setLoading(true)

		try {
			const cohere = new CohereClient({
				token: Config.COHERE_API_KEY,
			})

			const chat = await cohere.chat({
				message: userMessage,
				model: 'command-r-08-2024',
			})

			setMessage(chat.text)
		} catch (err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	return { message, fetchAIResponse, loading }
}

export default useCohereAI
