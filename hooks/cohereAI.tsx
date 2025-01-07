import { CohereClient } from 'cohere-ai'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import Config from 'react-native-config'

interface CohereAIContextType {
	message: string
	fetchAIResponse: (userMessage: string) => Promise<void>
	loading: boolean
}

interface CohereAIProviderProps {
	children: ReactNode
}

const CohereAIContext = createContext<CohereAIContextType>(
	{} as CohereAIContextType
)

export const CohereAIProvider: React.FC<CohereAIProviderProps> = ({
	children,
}) => {
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
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<CohereAIContext.Provider value={{ message, fetchAIResponse, loading }}>
			{children}
		</CohereAIContext.Provider>
	)
}

export const useCohereAI = () => {
	const context = useContext(CohereAIContext)
	if (!context) {
		throw new Error('useCohereAI must be used within a CohereAIProvider')
	}
	return context
}
