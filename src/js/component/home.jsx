import React, {useState} from "react";

const Home = () => {

//let nuevoTodo = "";
const [nuevoTodo, setNuevoTodo] = useState("")

const [todos, setTodos] = useState([""]);

const handleClick = () => {
	console.log(nuevoTodo)
	setTodos([...todos, nuevoTodo])
}

const deleteTodo = (indice) => {
	const listaNueva = todos.filter((todo, i) => i !== indice)
	setTodos(listaNueva);
}

const handleChange = (event) => {
	setNuevoTodo(event.target.value);
}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">To do list</h1>
			<div className="input-group mb-3" >
  				<input type="text" class="form-control" aria-label="To do" aria-describedby="button-addon2" onChange={handleChange} />
  				<button onClick={handleClick} className="btn btn-light" type="button" id="button-addon2">Button</button>
			</div>
				<ul className="list-group">
				{todos.map((todo, indice) => {
					return(
						<li className="list-group-item">
							{todo} <button onClick={() => deleteTodo(indice)} type="button" className="btn-close" aria-label="Close"></button>
						</li>
					)
				})}
			</ul>
		</div>

	);
};

export default Home;
