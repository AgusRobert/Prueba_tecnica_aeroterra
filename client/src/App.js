import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
