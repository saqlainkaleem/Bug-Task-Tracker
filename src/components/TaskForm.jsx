import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { toast } from "react-toastify";

function TaskForm({ closeForm }) {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		priority: "Low",
		status: "To Do",
		assignee: "",
		importantDates: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { title, description, assignee } = formData;
		if (!title || !description || !assignee) {
			toast.error("Please fill in all required fields.");
			return;
		}

		dispatch(addTask(formData));
		toast.success("Task added successfully!");
		closeForm();

		setFormData({
			title: "",
			description: "",
			priority: "Low",
			status: "To Do",
			assignee: "",
			importantDates: "",
		});
	};

	return (
		<div className="task-form-container">
			<h2>Add New Task</h2>
			<form onSubmit={handleSubmit} className="task-form">
				<div className="form-field">
					<label>Title</label>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-field">
					<label>Description</label>
					<textarea
						name="description"
						placeholder="Description"
						value={formData.description}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-field">
					<label>Priority</label>
					<select
						name="priority"
						value={formData.priority}
						onChange={handleChange}
					>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</select>
				</div>
				<div className="form-field">
					<label>Status</label>
					<select name="status" value={formData.status} onChange={handleChange}>
						<option value="To Do">To Do</option>
						<option value="In Progress">In Progress</option>
						<option value="Completed">Completed</option>
					</select>
				</div>
				<div className="form-field">
					<label>Assignee</label>
					<input
						type="text"
						name="assignee"
						placeholder="Assignee"
						value={formData.assignee}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-field">
					<label>Important Date</label>
					<input
						type="date"
						name="importantDates"
						value={formData.importantDates}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="submit-button">
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
