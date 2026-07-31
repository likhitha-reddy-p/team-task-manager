function ProjectCard({ title, description, status }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>

      <p>{description}</p>

      <strong>Status:</strong> {status}
    </div>
  );
}

export default ProjectCard;