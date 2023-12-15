import { MiContexto } from "./crearContext"
import { useTasks } from "../hooks/useTasks"
    
const ContextTask = ({children}) =>{
    const [tareasList,setTarea, addTarea, deleteTarea, deleteAllTareas, editarTarea, checkTarea] = useTasks();
    return(
        <>
        <MiContexto.Provider value={{tareasList, setTarea, addTarea, deleteTarea, deleteAllTareas,  editarTarea, checkTarea}}>
            {children}
        </MiContexto.Provider>
        </>
    )
}

export default ContextTask;