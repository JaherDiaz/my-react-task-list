import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Suspense, lazy } from "react";
import { Heading, Spinner } from "@chakra-ui/react";

const Home = lazy(() => import("./pages/Home"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const Tareas = lazy(() => import("./pages/Tareas"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <Spinner thickness="4px" marginLeft="80px" marginTop="120px" size="xl"/>
        }
      >
        <Heading paddingLeft="25px" as="h1">
          Menu de navegación
        </Heading>
        <Menu />
        <hr className="hr" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/Sobre_Nosotros" element={<SobreNosotros />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;