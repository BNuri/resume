"use strict";

var careerContainer = document.getElementById("career");

if (careers.length > 0) {
  careers.forEach(function (career) {
    var container = document.createElement("section");
    var header = document.createElement("header");
    var company = createElement("h3", "container__title-s", career.company);
    var period = createElement("h5", "container__subtitle-s", career.period);
    var subtitle = createElement("h4", "container__subtitle", "[진행 프로젝트]");
    header.append(company, period, subtitle);
    container.appendChild(header);
    var projectsUl = document.createElement("ul");
    career.projects.forEach(function (project) {
      var career = createContainerElement(project);
      projectsUl.appendChild(career);
    });
    container.appendChild(projectsUl);
    careerContainer.appendChild(container);
  });
}