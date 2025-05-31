import { useEffect, useState } from 'react'
import vivi from '../../assets/images/vivi.jpg'
import logo from '../../assets/logo-vivi.svg'

function Quienes() {
	const [contenido, setContenido] = useState<string | null>(null)

	useEffect(() => {
		fetch(
			'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/',
			{
				headers: {
					Authorization: 'Bearer ipss.get',
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				if (data?.data) {
					setContenido(data.data)
				}
			})
			.catch((error) => {
				console.error('Error al cargar datos de quiénes somos:', error)
			})
	}, [])

	if (!contenido) return <p className='text-center py-10'>Cargando...</p>

	return (
		<section id='quienes' className='w-full lg:py-18 py-16 px-6'>
			<div className='pb-2 pt-6 lg:pt-10 lg:pb-10 lg:px-30 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-yellow-950/40 dark:before:border-yellow-950/40 dark:after:border-yellow-950/40 text-center italic'>
				Quiénes somos
			</div>
			<h2 className='text-3xl italic text-center lg:text-4xl lg:px-6 font-bold text-yellow-950 mb-12 lg:mb-18'>
				Tejiendo con amor desde Zapallar
			</h2>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:px-6'>
				<div className='justyfy-center flex flex-col items-center lg:items-start'>
					<img
						src={logo}
						alt='Logo Tejelanas Vivi'
						className='w-25 h-auto mt-4 mb-8 opacity-65'
					/>
					<p className='text-gray-700 sm:text-md lg:text-xl leading-relaxed whitespace-pre-line'>
						{contenido}
					</p>
				</div>
				<div className='flex justify-center'>
					<img
						src={vivi}
						alt='Tejelanas Vivi en acción'
						className='rounded-2xl shadow-lg max-w-full h-auto'
					/>
				</div>
			</div>
		</section>
	)
}

export default Quienes
