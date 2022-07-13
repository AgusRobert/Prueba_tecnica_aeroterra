import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, } from '@mui/material';
import { createTheme } from '@mui/material';
import Prueba from "./Componentes/Prueba.jsx"
import'typeface-open-sans'
const temaAero = createTheme({
  typography: {
   a:{fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(',')},
    }})

function App() {
  return (
    <ThemeProvider theme={temaAero}>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Prueba/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
