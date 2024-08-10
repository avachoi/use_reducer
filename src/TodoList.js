import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) {
	const [newTodo, setNewTodo] = useState("");

	const handleAddTodo = () => {
		if (newTodo.trim()) {
			addTodo(newTodo);
			setNewTodo("");
		}
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add a new todo..."
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add</button>
			<ul>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
