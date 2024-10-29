import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";

function ViewTaskModal({ task, onClose }) {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	const formatTimeSpent = (timeSpent) => {
		return `${Math.floor(timeSpent / 60)}m ${timeSpent % 60}s`;
	};

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
			>
				<button
					className="close-button"
					onClick={onClose}
					aria-label="Close Modal"
				>
					<FaTimes />
				</button>
				<div className="modal-header">
					<h3>{task.title}</h3>
					<p className="task-status">Status: {task.status}</p>
				</div>
				<div className="modal-body">
					<div className="task-details">
						<div className="detail-item">
							<span className="detail-label">Description:</span>
							<p>{task.description}</p>
						</div>
						<div className="detail-item">
							<span className="detail-label">Priority:</span>
							<strong>{task.priority}</strong>
						</div>
						<div className="detail-item">
							<span className="detail-label">Assignee:</span>
							<strong>{task.assignee}</strong>
						</div>
						<div className="detail-item">
							<span className="detail-label">Important Dates:</span>
							<strong>{task.importantDates}</strong>
						</div>
						<div className="detail-item">
							<span className="detail-label">Time Spent:</span>
							<strong>{formatTimeSpent(task.timeSpent)}</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ViewTaskModal;
