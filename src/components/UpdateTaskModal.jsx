import { useState } from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";

function UpdateTaskModal({ task, onClose, onSave }) {
	const [formData, setFormData] = useState({
		title: task.title,
		description: task.description,
		priority: task.priority,
		status: task.status,
		assignee: task.assignee,
		importantDates: task.importantDates,
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setError("");
	};

	const handleSave = () => {
		const { title, description, assignee } = formData;
		if (!title || !description || !assignee) {
			setError("Title, description, and assignee are required.");
			return;
		}

		onSave({ ...task, ...formData });
		onClose();
	};

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="close-button" onClick={onClose}>
					<FaTimes />
				</button>
				<h3>Edit Task</h3>
				{error && <p className="error-message">{error}</p>}
				<div className="modal-field">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Title"
					/>
				</div>
				<div className="modal-field">
					<label>Description</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						placeholder="Description"
					/>
				</div>
				<div className="modal-field">
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
				<div className="modal-field">
					<label>Status</label>
					<select name="status" value={formData.status} onChange={handleChange}>
						<option value="To Do">To Do</option>
						<option value="In Progress">In Progress</option>
						<option value="Completed">Completed</option>
					</select>
				</div>
				<div className="modal-field">
					<label>Assignee</label>
					<input
						type="text"
						name="assignee"
						value={formData.assignee}
						onChange={handleChange}
						placeholder="Assignee"
					/>
				</div>
				<div className="modal-field">
					<label>Important Dates</label>
					<input
						type="date"
						name="importantDates"
						value={formData.importantDates}
						onChange={handleChange}
					/>
				</div>
				<button className="save-button" onClick={handleSave}>
					Save Changes
				</button>
			</div>
		</div>
	);
}

export default UpdateTaskModal;
