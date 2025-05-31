import { useState, useEffect } from 'react'
import Modal from '../Modal'

function Contacto() {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		mensaje: '',
	})

	const [errors, setErrors] = useState<Record<string, string>>({})
	const [submitted, setSubmitted] = useState(false)

	const validar = () => {
		const nuevosErrores: Record<string, string> = {}

		if (!formData.nombre.trim())
			nuevosErrores.nombre = 'El nombre es requerido'
		if (!formData.correo.trim()) {
			nuevosErrores.correo = 'El correo es requerido'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
			nuevosErrores.correo = 'Correo no válido'
		}

		if (!formData.mensaje.trim())
			nuevosErrores.mensaje = 'El mensaje es requerido'

		setErrors(nuevosErrores)
		return Object.keys(nuevosErrores).length === 0
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
		setSubmitted(false)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (validar()) {
			setSubmitted(true)
			setFormData({ nombre: '', correo: '', mensaje: '' })
			setErrors({})
		}
	}

	useEffect(() => {
		const insertarProductoDesdeStorage = () => {
			const producto = localStorage.getItem('productoSeleccionado')
			if (producto) {
				setFormData((prev) => ({
					...prev,
					mensaje: `Estoy interesado en: ${producto}\n`,
				}))
				localStorage.removeItem('productoSeleccionado')
			}
		}

		const handleHashOrPopState = () => {
			insertarProductoDesdeStorage()
		}

		window.addEventListener('hashchange', handleHashOrPopState)
		window.addEventListener('popstate', handleHashOrPopState)

		insertarProductoDesdeStorage() // Carga inicial

		return () => {
			window.removeEventListener('hashchange', handleHashOrPopState)
			window.removeEventListener('popstate', handleHashOrPopState)
		}
	}, [])

	return (
		<section id='contacto' className='w-full lg:py-18 py-16 px-6'>
			<div className='pb-2 pt-6 lg:pt-10 lg:pb-10 lg:px-30 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-yellow-950/40 dark:before:border-yellow-950/40 dark:after:border-yellow-950/40 text-center italic'>
				Contáctanos
			</div>

			<h2 className='text-4xl text-yellow-950 italic font-black text-center mb-8'>
				¿Hablemos?
			</h2>

			<div className='max-w-2xl mx-auto grid grid-cols-1 gap-4 items-start'>
				<form onSubmit={handleSubmit} noValidate className='space-y-6'>
					<div>
						<label
							htmlFor='nombre'
							className='block text-sm text-yellow-900 font-bold'
						>
							Nombre
						</label>
						<input
							type='text'
							id='nombre'
							name='nombre'
							value={formData.nombre}
							placeholder='Ingrese su nombre'
							onChange={handleChange}
							className={`mt-1 block w-full rounded-md border bg-amber-50 border-amber-600/50 p-3 shadow-sm focus:border-amber-800 focus:ring-amber-500 ${
								errors.nombre ? 'border-red-500' : ''
							}`}
						/>
						{errors.nombre && (
							<p className='text-red-600 text-sm mt-1'>
								{errors.nombre}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor='correo'
							className='block text-sm text-yellow-900 font-bold'
						>
							Correo electrónico
						</label>
						<input
							type='email'
							id='correo'
							name='correo'
							value={formData.correo}
							placeholder='Ingrese su correo electrónico'
							onChange={handleChange}
							className={`mt-1 block w-full rounded-md border bg-amber-50 border-amber-600/50 p-3 shadow-sm focus:border-amber-800 focus:ring-amber-500 ${
								errors.correo ? 'border-red-500' : ''
							}`}
						/>
						{errors.correo && (
							<p className='text-red-600 text-sm mt-1'>
								{errors.correo}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor='mensaje'
							className='block text-sm text-yellow-900 font-bold'
						>
							Mensaje
						</label>
						<textarea
							id='mensaje'
							name='mensaje'
							rows={4}
							value={formData.mensaje}
							onChange={handleChange}
							className={`mt-1 block w-full rounded-md border bg-amber-50 border-amber-600/50 p-3 shadow-sm focus:border-amber-800 focus:ring-amber-500 ${
								errors.mensaje ? 'border-red-500' : ''
							}`}
						/>
						{errors.mensaje && (
							<p className='text-red-600 text-sm mt-1'>
								{errors.mensaje}
							</p>
						)}
					</div>

					<div className='text-center'>
						<button
							type='submit'
							className='w-full inline-block bg-amber-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-amber-700 transition'
						>
							Enviar
						</button>
					</div>

					{submitted && (
						<Modal
							isOpen={submitted}
							onClose={() => setSubmitted(false)}
						>
							<div className='p-6 text-center'>
								<h3 className='text-2xl font-semibold mb-4 text-amber-950'>
									Mensaje enviado!
								</h3>
								<p>
									Nos pondremos en contacto contigo lo antes
									posible.
								</p>
								<button
									onClick={() => setSubmitted(false)}
									className='mt-4 bg-amber-900 text-white px-4 py-2 rounded hover:bg-amber-700 transition'
								>
									Cerrar
								</button>
							</div>
						</Modal>
					)}
				</form>
			</div>
		</section>
	)
}

export default Contacto
