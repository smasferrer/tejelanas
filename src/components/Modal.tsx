function Modal({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}) {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 flex items-center justify-center bg- bg-yellow-950/60 bg-opacity-50'>
			<div className='bg-white p-6 shadow-lg rounded-2xl'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	)
}
export default Modal
