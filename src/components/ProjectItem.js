import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
    {technologies.map((tech, index) => (
      <span key={index}>{tech}</span>
    ))}
  </div>
);
};


export default ProjectItem;
