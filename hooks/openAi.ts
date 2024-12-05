import OpenAI from 'openai'
import { useState } from 'react'

const useOpenAI = () => {
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchAIResponse = async (userMessage: string) => {
		const openai = new OpenAI()
		setLoading(true)
		setError(null)

		try {
			const completion = await openai.chat.completions.create({
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

	return { message, fetchAIResponse, loading, error }
}

export default useOpenAI
