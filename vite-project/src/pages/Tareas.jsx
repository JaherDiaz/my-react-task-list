import Header from "../components/Header";
import TaskList from "../components/TaskList";
import ContextTask from "../context/ContextTask";
import FooterTask from "../components/FooterTask";

export default function Tareas() {
  return (
    <div className="tareas-page">
      <ContextTask>
        <Header />
        <TaskList />
        <FooterTask/>
      </ContextTask>
    </div>
  );
}