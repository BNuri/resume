const careerContainer = document.getElementById("career");

if (careers.length > 0) {
  careers.forEach((career) => {
    const container = document.createElement("section");
    const header = document.createElement("header");
    const company = createElement("h3", "container__title-s", career.company);
    const period = createElement("h5", "container__subtitle-s", career.period);
    const subtitle = createElement(
      "h4",
      "container__subtitle",
      "[진행 프로젝트]"
    );
    header.append(company, period, subtitle);
    container.appendChild(header);
    const projectsUl = document.createElement("ul");
    career.projects.forEach((project) => {
      const career = createContainerElement(project);
      projectsUl.appendChild(career);
    });
    container.appendChild(projectsUl);
    careerContainer.appendChild(container);
  });
}
