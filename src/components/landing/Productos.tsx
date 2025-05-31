import { useEffect, useState } from 'react'

type Item = {
	id: number
	nombre: string
	descripcion: string
	precio?: number
	imgs: string[]
	esServicio?: boolean
}

function Productos() {
	const [items, setItems] = useState<Item[]>([])

	useEffect(() => {
		fetch(
			'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/',
			{
				headers: {
					Authorization: 'Bearer ipss.get',
				},
			},
		)
			.then((res) => res.json())
			.then((data) => {
				const productos = data?.data?.productos || []
				const servicios = (data?.data?.servicios || []).map(
					(servicio: any) => ({
						id: servicio.id,
						nombre: servicio.nombre,
						descripcion: `${servicio.fecha} - ${servicio.ubicacion} (Cupos: ${servicio.cupos})`,
						imgs: servicio.imgs,
						esServicio: true,
					}),
				)
				setItems([...productos, ...servicios])
			})
			.catch((error) => console.error('Error al cargar datos:', error))
	}, [])

	const irAContacto = (itemNombre: string) => {
		localStorage.setItem('productoSeleccionado', itemNombre)
		window.location.hash = ''
		window.location.hash = '#contacto'
	}

	return (
		<section id='productos' className='w-full lg:py-18 py-16 px-6'>
			<div className='pb-2 pt-6 lg:pt-10 lg:pb-10 lg:px-30 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-yellow-950/40 dark:before:border-yellow-950/40 dark:after:border-yellow-950/40 text-center italic'>
				Productos y Servicios
			</div>
			<div>
				<h2 className='text-3xl italic text-center lg:text-4xl mb-12 lg:px-6 font-bold text-yellow-950 lg:mb-18'>
					Productos y Servicios Invierno 2025
				</h2>
				<div className='max-w-7xl mx-auto grid xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-8'>
					{items.map((item) => (
						<div
							key={`${
								item.esServicio ? 'servicio' : 'producto'
							}-${item.id}`}
							className='blg:min-w-0 flex-shrink-0 
             bg-white/50 p-2 lg:p-4 rounded-lg shadow-md hover:shadow-lg 
             transition cursor-pointer snap-start flex flex-col h-full relative'
						>
							<img
								src={item.imgs[0]}
								alt={item.nombre}
								className='w-full sm:h-60 h-40 object-cover rounded-t-lg'
							/>
							<h2 className='text-sm lg:text-xl font-semibold mt-2 text-yellow-950/80'>
								{item.nombre}
							</h2>
							<p className='text-zinc-900/90 mt-2 lg:mt-1 text-sm lg:text-md mb-2'>
								{item.descripcion}
							</p>

							{item.esServicio ? (
								<button
									onClick={() => irAContacto(item.nombre)}
									className='mt-auto bg-yellow-800 hover:bg-yellow-900 text-white text-sm 
             font-semibold py-2 px-4 rounded w-full'
								>
									Contáctanos
								</button>
							) : (
								<p className='text-orange-800 pb-2 bt-1 pl-2 bg-amber-50 absolute top-2 right-2 lg:top-4 lg:right-4 mt-2 text-lg lg:text-2xl font-medium text-right rounded-bl-lg rounded-tl-lg'>
									${item.precio}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Productos
