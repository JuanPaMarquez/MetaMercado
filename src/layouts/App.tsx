import Carrusel from "../components/Carrusel/Carrusel"

function App() {
  return (
    <>
      <nav className="text-center text-4xl font-bold bg-blue-300 py-2">
        <h1>MetaMercado</h1>
      </nav>
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <div>    
          <p className=""><span className="font-bold">MetaMercado</span> es un pagina creada para apoyar
          a los emprendimientos en sus inicios, ayudando a los emprendedores a llegar al mercado digital.
          En esta plataforma queremos dar apoyo directo a todo tipo de empresa que busca digitalizar su negocio.
          </p>
        </div>
      </main>
      <footer>
        <div>
          <p>
            Creador uno
          </p>
        </div>
        <div>
          <p>
            Creador dos
          </p>
        </div>
        <div>
          <p>
            Creador tres
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
