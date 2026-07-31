function CreateProject() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Project</h1>

      <form>
        <input
          type="text"
          placeholder="Project Title"
          style={{ width: "300px", padding: "10px", marginBottom: "10px" }}
        />

        <br />

        <textarea
          placeholder="Description"
          rows="5"
          style={{ width: "300px", padding: "10px" }}
        />

        <br />
        <br />

        <button>Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;