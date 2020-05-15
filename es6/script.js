const createElement = (el, className, text = "") => {
  const element = document.createElement(el);
  element.className = className;
  element.innerText = text;
  return element;
};

const createAWithIcon = (item, iconName) => {
  const link = createElement("a", "");
  link.href = item;
  const icon = createElement("i", iconName);
  link.appendChild(icon);
  return link;
};

const createContainerElement = (project) => {
  const container = createElement("li", "container__project");
  const titleContainer = createElement("div", "container__project-title");
  const title = createElement("h4", "container__subtitle", project.title);
  titleContainer.appendChild(title);
  if (project.siteLink) {
    const siteLink = createAWithIcon(project.siteLink, "fas fa-globe");
    titleContainer.appendChild(siteLink);
  }
  if (project.gitHubLink) {
    const gitHubLink = createAWithIcon(project.gitHubLink, "fab fa-github");
    titleContainer.appendChild(gitHubLink);
  }
  if (project.period) {
    const period = createElement("h5", "container__subtitle-s", project.period);
    titleContainer.appendChild(period);
  }
  if (project.publisher) {
    const publisher = createElement(
      "h5",
      "container__subtitle-s",
      project.publisher
    );
    titleContainer.appendChild(publisher);
  }
  const contentContainer = createElement("div", "container__project-content");
  const descriptionContainer = createElement("ul", "container__project-desc");
  if (project.description && project.description.length > 0) {
    project.description.forEach((desc) => {
      const description = createElement("li", "", desc);
      descriptionContainer.appendChild(description);
    });
  }
  const stackContainer = createElement("ul", "container__project-stack");
  if (project.stack && project.stack.length > 0) {
    project.stack.forEach((stk) => {
      const stack = createElement("li", "stack", stk);
      stackContainer.appendChild(stack);
    });
  }
  contentContainer.appendChild(descriptionContainer);
  contentContainer.appendChild(stackContainer);
  container.appendChild(titleContainer);
  container.appendChild(contentContainer);
  return container;
};

const createListComponent = (item, id) => {
  const container = document.getElementById(id);
  if (item.length > 0) {
    const itemUl = document.createElement("ul");
    item.forEach((project) => {
      const itemLi = createContainerElement(project);
      itemUl.appendChild(itemLi);
    });
    container.appendChild(itemUl);
  }
};

createListComponent(certificates, "certificate");
createListComponent(educations, "education");
createListComponent(toyprojects, "toyproject");
