// DOM Elements
const modal = document.getElementById("modal");
const addProjectBtn = document.getElementById("add-project");
const saveProjectBtn = document.getElementById("save-project");

// Sample Data (Replace with localStorage later)
let projects = [
  {
    id: 1,
    title: "Server Migration",
    desc: "Move legacy servers to AWS",
    deadline: "2023-12-15",
    status: "todo",
    subtasks: [
      { text: "Backup data", completed: false },
      { text: "Configure EC2", completed: false }
    ],
    assignedTo: ["JD", "SM"]
  }
];

// Open Modal
addProjectBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close Modal
document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

// Render Projects
function renderProjects() {
  document.querySelectorAll(".tasks").forEach(column => {
    column.innerHTML = "";
    const status = column.dataset.status;
    const filteredProjects = projects.filter(proj => proj.status === status);

    filteredProjects.forEach(project => {
      const projectEl = document.createElement("div");
      projectEl.className = "task";
      projectEl.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="subtasks">
          ${project.subtasks.map(sub => `
            <div class="subtask">
              <input type="checkbox" ${sub.completed ? "checked" : ""}>
              <span>${sub.text}</span>
            </div>
          `).join("")}
        </div>
        <div class="footer">
          <span class="deadline">Due: ${project.deadline}</span>
          <div class="assignees">
            ${project.assignedTo.map(user => `
              <span class="user-badge">${user}</span>
            `).join("")}
          </div>
        </div>
      `;
      column.appendChild(projectEl);
    });
  });
}

// Initialize
renderProjects();
