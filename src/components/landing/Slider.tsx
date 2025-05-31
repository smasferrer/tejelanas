import { useEffect, useState } from 'react'
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import logoBlanco from '../../assets/logo-blanco.svg'

const slide = [
	{
		logo: logoBlanco,
		titulo: 'Hecho a mano con amor',
		subtitulo: 'Productos únicos para ti',
		image: slider1,
	},
	{
		logo: logoBlanco,
		titulo: 'Bienvenidos a Tejelanas Vivi',
		subtitulo: 'Artesanía con amor y cariño',
		image: slider2,
	},
	{
		logo: logoBlanco,
		titulo: 'Calidez y tradición en cada puntada',
		subtitulo: 'Descubre nuestra colección',
		image: slider3,
	},
]

function Slider() {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slide.length)
		}, 4500)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className='p-2 sm:p-4'>
			<div className='relative w-full h-[80vh] overflow-hidden rounded-xl'>
				{slide.map((slide, index) => (
					<div
						key={index}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
							index === current
								? 'opacity-100 z-10'
								: 'opacity-0 z-0'
						}`}
					>
						<img
							src={slide.image}
							alt={slide.titulo}
							className='w-full h-full object-cover object-center'
						/>
						<div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4'>
							<img
								src={slide.logo}
								alt='Logo'
								className='w-44 h-auto mb-4'
							/>
							<h2 className='text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg'>
								{slide.titulo}
							</h2>
							<p className='text-lg md:text-2xl'>
								{slide.subtitulo}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
