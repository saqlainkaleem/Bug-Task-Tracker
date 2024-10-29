import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {
	FaPlus,
	FaTimes,
	FaSignOutAlt,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import { AiFillBug } from "react-icons/ai";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { incrementTimeSpent } from "../store/taskSlice";
import { Line } from "react-chartjs-2";
import { toast } from "react-toastify";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend
);

function Dashboard() {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const dispatch = useDispatch();
	const dummyData = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				label: "Tasks Completed",
				data: [2, 4, 3, 5, 6, 4, 7],
				fill: false,
				borderColor: "rgba(75, 192, 192, 1)",
				backgroundColor: "rgba(75, 192, 192, 0.4)",
				tension: 0.3,
			},
		],
	};

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};
	const handleLogout = () => {
		dispatch(logout());
		toast.info("User Logged Out!");
	};

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(incrementTimeSpent(0));
		}, 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="dashboard-layout">
			<nav className="navbar">
				<h1>
					<AiFillBug />
					&nbsp;Dashboard
				</h1>
				<ul className="nav-links">
					<li onClick={handleLogout}>
						<FaSignOutAlt /> Logout
					</li>
				</ul>
			</nav>
			<div className="main-container">
				<div className="left-section">
					<TaskList />
				</div>
				<div className="right-section">
					<div
						className="line-chart-container"
						style={{ width: "100%", margin: "0 auto" }}
					>
						<Line data={dummyData} />
					</div>
				</div>
			</div>
			{/* Footer */}
			<footer className="footer">
				<p>Connect with us:</p>
				<div className="footer-icons">
					<a
						href="https://github.com/saqlainkaleem"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com/in/saqlainkaleem"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</div>
			</footer>
			<button onClick={toggleForm} className="add-task-button">
				<FaPlus size={24} color="white" />
			</button>

			{isFormOpen && (
				<div className="modal-overlay" onClick={toggleForm}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="close-button" onClick={toggleForm}>
							<FaTimes />
						</button>
						<TaskForm closeForm={toggleForm} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Dashboard;
