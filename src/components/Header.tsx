import { useState } from 'react'

function Header() {
	const [menuAbierto, setMenu] = useState(false)
	const [seccionActiva, setSeccionActiva] = useState<string>('inicio')

	const toggleMenu = () => setMenu(!menuAbierto)

	const handleClick = (seccion: string) => {
		setMenu(false)
		setSeccionActiva(seccion)
	}

	return (
		<header className='flowers-slider-header flex flex-wrap sticky top-0 bg-amber-50/90 lg:justify-start lg:flex-nowrap z-50 w-full p-4'>
			<nav className='relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full justify-center items-center px-4 md:px-0 lg:px-0 mx-auto'>
				{/* Logo */}
				<div className='lg:col-span-3 flex items-center'>
					<a
						href='#inicio'
						onClick={() => handleClick('inicio')}
						aria-label='Tejelanas Vivi'
					>
						<img
							src='/src/assets/logo-vivi.svg'
							alt='Logo Tejelanas Vivi'
							className='w-20 h-auto'
						/>
					</a>
				</div>

				{/* Botón hamburguesa */}
				<div className='flex items-center gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3'>
					<div className='lg:hidden'>
						<button
							onClick={toggleMenu}
							type='button'
							className='size-9.5 flex justify-center items-center text-sm font-semibold rounded-lg border border-amber-100 text-black hover:bg-amber-100/70 transition-all duration-300'
						>
							{menuAbierto ? (
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Menú */}
				<div
					className={`${
						menuAbierto ? 'block ease-linear h-screen' : 'hidden'
					} w-full lg:block lg:w-auto lg:order-2 lg:col-span-8 mt-4 lg:mt-0`}
				>
					<div className='flex text-3xl lg:text-sm xl:text-lg items-center text-center flex-col gap-y-10 gap-x-0 lg:flex-row lg:justify-end lg:items-center lg:gap-y-0 lg:gap-x-7'>
						<a
							href='#inicio'
							onClick={() => handleClick('inicio')}
							className={`transition-all ${
								seccionActiva === 'inicio'
									? 'border-b-3 leading-16 lg:leading-7 border-orange-200 font-semibold'
									: ''
							}`}
						>
							Inicio
						</a>
						<a
							href='#quienes'
							onClick={() => handleClick('quienes')}
							className={`transition-all ${
								seccionActiva === 'quienes'
									? 'border-b-3 leading-16 lg:leading-7 border-orange-200 font-semibold'
									: ''
							}`}
						>
							Quiénes Somos
						</a>
						<a
							href='#productos'
							onClick={() => handleClick('productos')}
							className={`transition-all ${
								seccionActiva === 'productos'
									? 'border-b-3 leading-16 lg:leading-7 border-orange-200 font-semibold'
									: ''
							}`}
						>
							Productos
						</a>
						<a
							href='#preguntas'
							onClick={() => handleClick('preguntas')}
							className={`transition-all ${
								seccionActiva === 'preguntas'
									? 'border-b-3 leading-16 lg:leading-7 border-orange-200 font-semibold'
									: ''
							}`}
						>
							Preguntas Frecuentes
						</a>
						<a
							href='#contacto'
							onClick={() => handleClick('contacto')}
							className={`transition-all ${
								seccionActiva === 'contacto'
									? 'border-b-3 leading-16 lg:leading-7 border-orange-200 font-semibold'
									: ''
							}`}
						>
							Contacto
						</a>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
