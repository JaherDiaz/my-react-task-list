import TaskInput from "./TaskInput";
export default function Header() {
  return (
    <div className="headerComp">
      <h1 className="titulo">Lista de Tareas</h1>
       <TaskInput />
     </div>
  );
}