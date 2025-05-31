function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <img
            src="/src/assets/logo-vivi.svg"
            alt="Logo Tejelanas Vivi"
            className="w-20 h-auto mb-4"
          />
          <p className="text-sm">Tejelanas Vivi</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contacto</h3>
          <p className="text-sm hover:underline">📍 <a href="https://maps.app.goo.gl/Z3VWAK422M2zv72Y9" target="_blank">Carlos León Briceño #1002 local 4, Laguna</a></p>
          <p className="text-sm hover:underline">📞 <a href="tel:+56976322314"> +56 9 7632 2314</a></p>
          <p className="text-sm hover:underline">📧 <a href="mailto:tejelanasvivi@gmail.com"> tejelanasvivi@gmail.com</a></p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#productos" className="hover:underline">Productos</a></li>
            <li><a href="#quienes" className="hover:underline">Quiénes Somos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Síguenos</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://www.instagram.com/teje_lanas.vivi/" target="_blank" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://es-la.facebook.com/MezcliMam/" target="_blank" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} Tejelanas Vivi. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer