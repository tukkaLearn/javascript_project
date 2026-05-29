const PROJECTS = [
  {
    title: "Custom Theme Web App",
    description: "Learn DOM basics, events and state handling.",
    level: "Beginner",
    link: "01.CustomThemeWeb",
    sourceCode:
      "https://github.com/tukkaLearn/javascript_project/tree/main/01.CustomThemeWeb",
  },
  {
    title: "Counter App",
    description: "Learn dark/light mode using localStorage.",
    level: "Advanced",
    link: "02.CounterApp",
    sourceCode:
      "https://github.com/tukkaLearn/javascript_project/tree/main/02.CounterApp",
  },
  {
    title: "Digital Clock",
    description: "Master DOM manipulation and logic building.",
    level: "Intermediate",
    link: "03.DigitalClock",
    sourceCode:
      "https://github.com/tukkaLearn/javascript_project/tree/main/03.DigitalClock",
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
        <div>
        <a class="btn" href="https://tukkalearn.github.io/javascript_project/${project.link}">Open Project</a>
        <a href=${project.sourceCode}>Source code</a>
        </div>
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
