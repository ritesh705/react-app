import { useReducer } from "react";
import React from "react";

const initialTodos=[
{id:1,title:"Todo1",complete:false},
{id:2,title:"Todo2",complete:false}]

const reducer=(state,action)=>
{
	switch (action.type){
		case "COMPLETE" :
		return state.map((todo)=>{
			if (todo.id===action.id){
			return {...todo, complete:!todo.complete}}
				else{
					return todo;
				}
			})
			default:
			return state;
		}
};
		

function Todolistp()
{
    const[todon, dispatch]=useReducer(reducer,initialTodos);  
    const handlesubmit = (todo) =>
    {
        dispatch({type:"COMPLETE", id: todo.id});
    };
    
    return(
    <div>
        {
        todon.map(todo => (
        <div key= {todo.id}>
            <label>
                {todo.title}
                <input type="checkbox" checked={todo.complete} onChange={()=>handlesubmit(todo)}  />
            </label>  
        </div>))
        }
    </div>);
    
}
export default Todolistp;