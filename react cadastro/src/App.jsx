import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import ListarUsuarios from "./pages/lista";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-user" element={<ListarUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;