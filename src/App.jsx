import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				pauseOnHover
				draggable
				theme="colored"
			/>
			<Routes>
				<Route
					path="/"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" replace />
						) : (
							<LoginForm />
						)
					}
				/>
				<Route
					path="/dashboard"
					element={
						isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
