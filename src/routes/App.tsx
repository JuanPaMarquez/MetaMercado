import { Route, Routes } from "react-router";
import Inicio from "../layouts/Inicio.tsx";
import NotFound from "../layouts/NotFound.tsx";
import Premio from "../layouts/Premio.tsx";
import RuletaView from "../layouts/RuletaView.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/ruleta" element={<RuletaView />} />
      
      { /* Premio */ }
      <Route path="/premio/:id" element={<Premio />} />
      
      { /* not found */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}