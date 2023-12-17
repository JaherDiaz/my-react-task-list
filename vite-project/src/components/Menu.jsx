import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

export default function Menu() {
  return (
    <div className="Menu">
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          {" "}
          <Link className="linksMenu1" to="/">
            Home
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link className="linksMenu2" to="/tareas">
             Tareas
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link className="linksMenu3" to="/Sobre_Nosotros">
            Sobre Nosotros
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      -
      <Toggle />
    </div>
  );
}