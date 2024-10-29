import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
	const storedTasks = localStorage.getItem("tasks");
	return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
	name: "tasks",
	initialState: loadTasksFromLocalStorage(),
	reducers: {
		addTask: (state, action) => {
			const newTasks = [
				...state,
				{ ...action.payload, timeSpent: 0, isTimerActive: false },
			];
			saveTasksToLocalStorage(newTasks);
			return newTasks;
		},
		deleteTask: (state, action) => {
			const newTasks = state.filter((_, index) => index !== action.payload);
			saveTasksToLocalStorage(newTasks);
			return newTasks;
		},
		updateTask: (state, action) => {
			const { index, updatedTask } = action.payload;
			const newTasks = state.map((task, i) =>
				i === index ? { ...task, ...updatedTask } : task
			);
			saveTasksToLocalStorage(newTasks);
			return newTasks;
		},
		toggleTimer: (state, action) => {
			const newTasks = state.map((task, i) =>
				i === action.payload
					? { ...task, isTimerActive: !task.isTimerActive }
					: task
			);
			saveTasksToLocalStorage(newTasks);
			return newTasks;
		},
		incrementTimeSpent: (state) => {
			const newTasks = state.map((task) =>
				task.isTimerActive ? { ...task, timeSpent: task.timeSpent + 1 } : task
			);
			saveTasksToLocalStorage(newTasks);
			return newTasks;
		},
	},
});

export const {
	addTask,
	deleteTask,
	updateTask,
	toggleTimer,
	incrementTimeSpent,
} = taskSlice.actions;
export default taskSlice.reducer;
