import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { toast } from "react-toastify";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleLogin = (email, password) => {
		if (email === "user@example.com" && password === "password123") {
			dispatch(login({ email }));
			toast.success("Welcome User");
		} else {
			toast.error("Invalid email or password");
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin(email, password);
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoComplete="email"
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						autoComplete="current-password"
					/>
				</div>
				<button type="submit" className="login-button">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
