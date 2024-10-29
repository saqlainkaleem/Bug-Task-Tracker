# Bug Task Tracker
A responsive task management application built with React, Redux, and Vite. This app allows users to create, update, view, and delete tasks, and includes features like task filtering, sorting, and timer tracking.

Live Demo: [Bug Task Tracker](https://bug-task-tracker.netlify.app/)



---

## Features

- **Task Addition**: Easily add tasks with details like title, description, priority, status, and assignee.
- **Filters**: Filter tasks by priority and status for better organization.
- **Time Tracking**: Start and stop a timer for each task to log time spent.
- **CRUD Operations**: View, edit, and delete tasks as needed.
- **Responsive Design**: Fully responsive for mobile and desktop screens.
- **Notifications**: Success and error notifications for real-time feedback.

## Assumptions
- The application uses hardcoded credentials for user authentication (`user@example.com` and `password123`).

- It assumes that users will enter valid data when creating or updating tasks.
- It does not include a backend service; all data handling is done within the client.
- 
## Tech Stack

- **Frontend**: React, Redux, CSS
- **Build Tool**: Vite
- **UI Library**: React Icons
- **Notifications**: React Toastify
- **Deployment**:  Hosted on Netlify
  
## Usage

1. **Login**: Start by logging into the app using the login form.
2. **Adding Tasks**: Use the "Add Task" button to open the task form and enter relevant details like title, description, priority, and assignee.
3. **Managing Tasks**:
   - **View Details**: Click on the view icon to view task details.
   - **Edit**: Use the edit icon to modify the task details.
   - **Delete**: Delete tasks using the delete icon.
   - **Time Tracking**: Start or stop the timer on any task to track time spent.
4. **Filtering**: Use the filter options to view tasks by:
   - **Priority**: Low, Medium, High.
   - **Status**: To Do, In Progress, Completed.
5. **Notifications**: Real-time success and error notifications are displayed at the top-right corner for feedback on actions performed.

## Installation

To run the app locally:

1. Clone the repository:
```bash
git clone https://github.com/saqlainkaleem/Bug-Task-Tracker.git
cd Bug-Task-Tracker
```
2. Install dependencies
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Development Preview :
Open http://localhost:5173 to view it in the browser.

## Deployment
- The app is deployed and live at [Bug Task Tracker](https://bug-task-tracker.netlify.app/).


