import React, { useState } from "react";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todo.title);

	const handleSave = () => {
		editTodo(todo.id, editText);
		setIsEditing(false);
	};

	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleComplete(todo.id)}
			/>
			{isEditing ? (
				<input
					type="text"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
			) : (
				<span>{todo.title}</span>
			)}
			{isEditing ? (
				<button onClick={handleSave}>Save</button>
			) : (
				<>
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button
						onClick={() => deleteTodo(todo.id)}
						disabled={!todo.completed}
					>
						Delete
					</button>
				</>
			)}
		</li>
	);
}

export default TodoItem;
