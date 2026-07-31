function TaskCard({ title, status, priority }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>

      <p>Status: {status}</p>

      <p>Priority: {priority}</p>
    </div>
  );
}

export default TaskCard;