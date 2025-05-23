import Carrusel from "../components/Carrusel/Carrusel"
import Social from "../ui/Social"

function App() {
  return (
    <>
      <nav className="text-center bg-blue-300 py-2">
        <div className="flex justify-center items-center">
          <img className="size-15" src="./icono.png" alt="" />
          <h1 className="text-4xl font-bold">MetaMercado</h1>
        </div>
        <h2 className="text-2xl cursive text-gray-800">"El mercado digital a tu medida"</h2>
      </nav>
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <div className="flex flex-col items-center" >    
          <h1 className="bg-blue-500 text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
          <p className="text-justify max-w-[700px] text-lg py-5 px-3"><span className="font-bold">MetaMercado</span> es un pagina creada para apoyar a los emprendimientos en sus inicios, ayudando a los emprendedores a llegar al mercado digital. En esta plataforma queremos dar apoyo directo a todo tipo de empresa que busca digitalizar su negocio.</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="bg-blue-950 text-white text-center font-bold text-2xl p-3 w-full">Video</h1>
          <iframe 
            className="w-full h-[500px] max-w-[700px]" 
            src="https://www.youtube.com/embed/MPkSITpHpfQ" 
            title="YouTube video player" 
            // frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>

        </div>
      </main>
      <footer className="">
        <h1 className="bg-blue-300 text-center text-3xl font-bold p-3">CONTACTANOS</h1>
        <Social />
      </footer>
    </>
  )
}

export default App
