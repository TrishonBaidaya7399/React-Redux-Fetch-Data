import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../Services/Actions/TodosAction";
import cart from "../cart";

const ToDos = () => {
    const {isLoading, todos, error} = useSelector(state=> state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllTodos());
    }, [dispatch])
    return (
        <div>
            <h1>TODOs APP</h1>
            {
                isLoading && <h1>Loading...</h1>
            }
            {
                error && <h1>Error: {error.message}</h1>
            }
               <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
           {todos.map((todo)=>{
            return (

                <div key={todo?.id} style={{width:"200px", height:"fit", border: "5px solid orangered", borderRadius:"10px", padding:"5px", backgroundColor:"orange", color:"black"}}>
                <h4>Title: {todo?.title}</h4>
                <p style={{fontSize:"12px"}}>Status: {todo?.completed ? "Completed!" : "Pending..."}</p>
            </div>
            )
        })}
        </div>
        </div>
    );
};

export default ToDos;