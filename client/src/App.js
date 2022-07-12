import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Componentes/Landing";
import Prueba from "./Componentes/Prueba"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
