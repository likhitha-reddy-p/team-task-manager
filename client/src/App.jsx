import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import CreateProject from "./pages/CreateProject";
import CreateTask from "./pages/CreateTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/create-task" element={<CreateTask />} />
    </Routes>
  );
}

export default App;