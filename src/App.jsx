import estilos from "./app.module.scss";
import { getEquipos } from "./hooks/stateApi.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";

function App() {

  const { data, isLoading, isError, error } = getEquipos()

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/form' element={<FormPage />} />
    </Routes>
  )
}

export default App
