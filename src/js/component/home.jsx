import React, {useState} from "react";

const Home = () => {

//let nuevoTodo = "";
const [nuevoTodo, setNuevoTodo] = useState("")

const [todos, setTodos] = useState([]);


const onkeydown = (event) => {
	if (event.key === "Enter") {
		setTodos([...todos, nuevoTodo])
	setNuevoTodo("")}
	
};

const deleteTodo = (indice) => {
	const listaNueva = todos.filter((todo, i) => i !== indice)
	setTodos(listaNueva);
}

const handleChange = (event) => {
	setNuevoTodo(event.target.value);
}



  


	return (
		<div className="container text-center">
			
			
    			<h1 className="display-4 text-center mb-4">To do list</h1>
    			<div className="p-2 mb-2 bg-light border-bottom">
     				 <input type="text" className="form-control" onChange={handleChange} value={nuevoTodo} onKeyDown = {(e) => onkeydown(e)} />
    			</div>
    			<ul className="list-group list-group-flush">
       			 {todos.map((todo, indice) => {
            		return(
               		 <li className="list-group-item">
                    {todo} <button onClick={() => deleteTodo(indice)} type="button" className="btn-close " aria-label="Close"></button>
                	</li>
            		)
       			 })}
    			</ul>
				<small className="text-muted">{todos.length} item left</small>
			</div>
		
	);
};

export default Home;
