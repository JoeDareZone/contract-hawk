import { CohereClient } from 'cohere-ai'
import { useState } from 'react'
import Config from 'react-native-config'

const useCohereAI = () => {
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	const fetchAIResponse = async (userMessage: string) => {
		setLoading(true)

		try {
			const client = new CohereClient({
				token: Config.COHERE_API_KEY,
			})

			const res = await client.chat({
				message: userMessage,
				model: 'command-r-08-2024',
				preamble:
					'You are an AI-assistant chatbot. You are trained to assist users by providing thorough and helpful responses to their queries.',
			})

			return res
		} catch (err) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	return { message, fetchAIResponse, loading }
}

export default useCohereAI
