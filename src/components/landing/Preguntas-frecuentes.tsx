import { useEffect, useState } from 'react'
import axios from 'axios'

interface Faq {
	id: number
	titulo: string
	respuesta: string
	activo: boolean
}

function Preguntas() {
	const [faqs, setFaqs] = useState<Faq[]>([])
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	useEffect(() => {
		const fetchFaqs = async () => {
			try {
				const response = await axios.get(
					'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/',
					{
						headers: {
							Authorization: 'Bearer ipss.get',
						},
					},
				)
				setFaqs(response.data.data)
			} catch (error) {
				console.error(
					'Error al obtener las preguntas frecuentes:',
					error,
				)
			}
		}

		fetchFaqs()
	}, [])

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id='preguntas' className='w-full lg:py-18 py-16 px-6'>
			<div className='pb-2 pt-6 lg:pt-10 lg:pb-10 lg:px-30 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-yellow-950/40 dark:before:border-yellow-950/40 dark:after:border-yellow-950/40 text-center italic'>
				Preguntas Frecuentes
			</div>
			<h2 className='text-3xl text-center lg:text-4xl lg:px-6 font-bold text-yellow-950 mb-12 lg:mb-18 italic'>
				Necesitas ayuda?
			</h2>
			<div className='max-w-2xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-4 items-start'>
				{faqs.map((faq, index) => (
					<div
						key={faq.id}
						className='border border-yellow-950/40 rounded-lg overflow-hidden'
					>
						<button
							onClick={() => toggle(index)}
							className='w-full text-left px-5 py-4 font-medium text-yellow-950 bg-yellow-950/10 hover:bg-yellow-950/20 transition cursor-pointer'
						>
							{faq.titulo}
						</button>
						{openIndex === index && (
							<div className='px-5 py-4 bg-yellow-100/10 text-yellow-950/60 font-medium'>
								{faq.respuesta}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default Preguntas
