import OpenAI from 'openai'
import { useState } from 'react'
import Config from 'react-native-config'

const useOpenAI = () => {
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const client = new OpenAI({
		apiKey: Config.OPENAI_API_KEY,
	})

	const fetchAIResponse = async (userMessage: string) => {
		setLoading(true)
		setError(null)

		try {
			const completion = await client.chat.completions.create({
				model: 'gpt-4o',
				messages: [{ role: 'user', content: userMessage }],
			})
			setMessage(completion.id)
		} catch (err) {
			setError((err as any) || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return { client, message, fetchAIResponse, loading, error }
}

export default useOpenAI
