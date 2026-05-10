const PROJECTS = [
  {
    title: "01 Counter App",
    description: "Learn DOM basics, events and state handling.",
    level: "Beginner",
    link: "01-counter",
  },
  {
    title: "02 Theme Switcher",
    description: "Learn dark/light mode using localStorage.",
    level: "Advanced",
    link: "02-theme-switcher",
  },
  {
    title: "03 Calculator",
    description: "Master DOM manipulation and logic building.",
    level: "Intermediate",
    link: "03-calculator",
  },
  {
    title: "04 Todo List",
    description: "Master DOM manipulation and logic building.",
    level: "Advanced",
    link: "04-todo-list",
  },
];

const grid = document.querySelector(".grid");
console.log(grid);

PROJECTS.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <span class="badge">${project.level}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a class="btn" href="${project.link}">Open Project</a>
    `;
  grid.appendChild(card);
});

const badge = document.querySelectorAll(".badge");
badge.forEach((badge) => {
  if (badge.textContent === "Beginner") {
    badge.style.backgroundColor = "#238523";
  } else if (badge.textContent === "Intermediate") {
    badge.style.backgroundColor = "#9e9e1c";
  } else {
    badge.style.backgroundColor = "#b71717";
  }
});

const copyRight = document.querySelector(".copyright");
copyRight.textContent = `© ${new Date().getFullYear()} Tukka-Learn.`;
