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
        <div className="flex flex-col items-center" >    
          <h1 className="bg-blue-500 text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
          <p className="text-justify max-w-[700px] text-lg py-5"><span className="font-bold">MetaMercado</span> es un pagina creada para apoyar a los emprendimientos en sus inicios, ayudando a los emprendedores a llegar al mercado digital. En esta plataforma queremos dar apoyo directo a todo tipo de empresa que busca digitalizar su negocio.</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="bg-blue-950 text-white text-center font-bold text-2xl p-3 w-full">Video</h1>
          <Carrusel />

        </div>
      </main>
      <footer className=" py-2">
        <h1 className="bg-blue-300 text-center text-2xl font-bold p-3">Redes sociales</h1>
      </footer>
    </>
  )
}

export default App
