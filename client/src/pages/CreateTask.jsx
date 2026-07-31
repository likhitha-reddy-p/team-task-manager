function CreateTask() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Task</h1>

      <form>
        <input
          type="text"
          placeholder="Task Title"
          style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
        />

        <br />

        <textarea
          placeholder="Task Description"
          rows="5"
          style={{ width: "300px", padding: "10px" }}
        />

        <br />
        <br />

        <button>Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;