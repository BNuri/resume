"use strict";

var createElement = function createElement(el, className) {
  var text =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  var element = document.createElement(el);
  element.className = className;
  element.innerText = text;
  return element;
};

var createAWithIcon = function createAWithIcon(item, iconName) {
  var link = createElement("a", "");
  link.href = item;
  var icon = createElement("i", iconName);
  link.appendChild(icon);
  return link;
};

var createContainerElement = function createContainerElement(project) {
  var container = createElement("li", "container__project");
  var titleContainer = createElement("div", "container__project-title");
  var title = createElement("h4", "container__subtitle", project.title);
  titleContainer.appendChild(title);
  if (project.siteLink) {
    var siteLink = createAWithIcon(project.siteLink, "fas fa-globe");
    titleContainer.appendChild(siteLink);
  }
  if (project.gitHubLink) {
    var gitHubLink = createAWithIcon(project.gitHubLink, "fab fa-github");
    titleContainer.appendChild(gitHubLink);
  }
  if (project.period) {
    var period = createElement("h5", "container__subtitle-s", project.period);
    titleContainer.appendChild(period);
  }
  if (project.publisher) {
    var publisher = createElement(
      "h5",
      "container__subtitle-s",
      project.publisher
    );
    titleContainer.appendChild(publisher);
  }
  var contentContainer = createElement("div", "container__project-content");
  var descriptionContainer = createElement("ul", "container__project-desc");
  if (project.description && project.description.length > 0) {
    project.description.forEach(function (desc) {
      var description = createElement("li", "", desc);
      descriptionContainer.appendChild(description);
    });
  }
  var stackContainer = createElement("ul", "container__project-stack");
  if (project.stack && project.stack.length > 0) {
    project.stack.forEach(function (stk) {
      var stack = createElement("li", "stack", stk);
      stackContainer.appendChild(stack);
    });
  }
  contentContainer.append(descriptionContainer, stackContainer);
  container.append(titleContainer, contentContainer);
  return container;
};

var createListComponent = function createListComponent(item, id) {
  var container = document.getElementById(id);
  if (item.length > 0) {
    var itemUl = document.createElement("ul");
    item.forEach(function (project) {
      var itemLi = createContainerElement(project);
      itemUl.appendChild(itemLi);
    });
    container.appendChild(itemUl);
  }
};

createListComponent(certificates, "certificate");
createListComponent(educations, "education");
createListComponent(toyprojects, "toyproject");

var darkToggle = function darkToggle() {
  var body = document.body;
  var toggleBtn = document.getElementById("darkToggle");
  body.classList.toggle("dark-mode");
  toggleBtn.className = body.className.includes("dark-mode")
    ? "fas fa-sun fa-lg"
    : "fas fa-moon fa-lg";
};
