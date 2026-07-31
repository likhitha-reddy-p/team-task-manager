const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      status: {
        $ne: "Completed",
      },
    });

    const highPriorityTasks = await Task.countDocuments({
      priority: "High",
    });

    res.status(200).json({
      success: true,
      dashboard: {
        totalProjects,
        totalTasks,
        completedTasks,
        pendingTasks,
        highPriorityTasks,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};