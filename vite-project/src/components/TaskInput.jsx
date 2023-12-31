import { useContext, useState } from "react";
import { MiContexto } from "../context/crearContext";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Input  } from "@chakra-ui/react";

export default function TaskInput() {
  const [inputTarea, setInputTarea] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [displayError, setDisplayError] = useState("none");
  const [displaySuccess, setDisplaySuccess] = useState("none");
  const { addTarea } = useContext(MiContexto);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputTarea("");
    setInputDescripcion("");
  };

  const handleChangeTarea = (event) => {
    setInputTarea(event.target.value);
    setDisplaySuccess("none");
  };

  const handleChangeDescripcion = (event) => {
    setInputDescripcion(event.target.value);
    setDisplaySuccess("none");
  };

  const handleNuevaTareaClick = () => {
    if (inputTarea.length > 3) {
      addTarea(inputTarea, inputDescripcion);
      setDisplaySuccess("flex");
      setDisplayError("none");
    } else {
      setDisplayError("flex");
    }
  };

  return (
    <div className="inputBar">
      <form id="formularioTarea" onSubmit={handleSubmit}>
        <Input id="txt1" type="text" name="txt1" placeholder="Ingrese nueva tarea" onChange={handleChangeTarea} value={inputTarea} />
        <Input id="txt2" type="text" name="txt2" placeholder="Ingrese una descripción" onChange={handleChangeDescripcion} value={inputDescripcion} />
        <IconButton colorScheme="blue" type="submit" width="45px" height="40px" marginLeft="20px" icon={<AddIcon />} onClick={handleNuevaTareaClick} />
        <Alert width="570px" flexWrap="wrap" justifyItems="end" borderRadius="5px" display={displayError} status="error">
          <AlertIcon />
          <AlertTitle>El nombre de la tarea es muy corto</AlertTitle>
          <AlertDescription paddingLeft="35px">Debe tener más de 3 caracteres</AlertDescription>
        </Alert>
        <Alert borderRadius="5px" display={displaySuccess} status="success">
          <AlertIcon />
          <AlertTitle>Se ha añadido una tarea satisfactoriamente</AlertTitle>
        </Alert>
      </form>
    </div>
  );
}