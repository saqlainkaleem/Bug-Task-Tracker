import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEye, FaEdit, FaTrash, FaClock } from "react-icons/fa";
import { deleteTask, updateTask, toggleTimer } from "../store/taskSlice";
import ViewTaskModal from "./ViewTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import { toast } from "react-toastify";
import "./TaskList.css";

function TaskList() {
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const [viewingTask, setViewingTask] = useState(null);
	const [editingTask, setEditingTask] = useState(null);
	const [filterPriority, setFilterPriority] = useState("All");
	const [filterStatus, setFilterStatus] = useState("All");

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}m ${remainingSeconds}s`;
	}

	// Task event handlers with toast notifications

	const handleUpdateTask = (updatedTask, index) => {
		dispatch(updateTask({ index, updatedTask }));
		toast.info("Task updated successfully!");
	};

	const handleDeleteTask = (index) => {
		dispatch(deleteTask(index));
		toast.error("Task deleted successfully!");
	};

	const handleToggleTimer = (index) => {
		dispatch(toggleTimer(index));
		const task = tasks[index];
		toast(task.isTimerActive ? "Timer stopped" : "Timer started", {
			type: task.isTimerActive ? "info" : "success",
		});
	};

	// Filter logic
	const filteredTasks = tasks
		.filter(
			(task) => filterPriority === "All" || task.priority === filterPriority
		)
		.filter((task) => filterStatus === "All" || task.status === filterStatus);

	return (
		<div>
			<div className="filter-sort-container">
				<h2>Task List</h2>
				<div className="filter-group">
					<label>Filter by Priority:</label>
					<select
						value={filterPriority}
						onChange={(e) => setFilterPriority(e.target.value)}
					>
						<option value="All">All</option>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</select>
				</div>
				<div className="filter-group">
					<label>Filter by Status:</label>
					<select
						value={filterStatus}
						onChange={(e) => setFilterStatus(e.target.value)}
					>
						<option value="All">All</option>
						<option value="To Do">To Do</option>
						<option value="In Progress">In Progress</option>
						<option value="Completed">Completed</option>
					</select>
				</div>
			</div>
			<div className="task-list">
				{filteredTasks.map((task, index) => (
					<div key={index} className="task-card">
						<h3>{task.title}</h3>
						<p>{task.description}</p>
						<p>Priority: {task.priority}</p>
						<p>Status: {task.status}</p>
						<p>Assignee: {task.assignee}</p>
						<p>Important Dates: {task.importantDates}</p>
						<p>Time Spent: {formatTime(task.timeSpent)} </p>
						<div className="task-actions">
							<button onClick={() => setViewingTask(task)}>
								<FaEye />
							</button>
							<button onClick={() => setEditingTask({ ...task, index })}>
								<FaEdit />
							</button>
							<button onClick={() => handleDeleteTask(index)}>
								<FaTrash />
							</button>
							<button onClick={() => handleToggleTimer(index)}>
								<FaClock /> {task.isTimerActive ? "Stop" : "Start"}
							</button>
						</div>
					</div>
				))}
			</div>

			{viewingTask && (
				<ViewTaskModal
					task={viewingTask}
					onClose={() => setViewingTask(null)}
				/>
			)}
			{editingTask && (
				<UpdateTaskModal
					task={editingTask}
					onClose={() => setEditingTask(null)}
					onSave={(updatedTask) => {
						handleUpdateTask(updatedTask, editingTask.index);
						setEditingTask(null);
					}}
				/>
			)}
		</div>
	);
}

export default TaskList;
