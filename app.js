"use strict";
// 초기 프로젝트: own portfolio data is kept in profile.js.
const portfolio = window.portfolioData;
const grid = document.getElementById("work-grid");
function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
document.getElementById("profile-name").textContent = portfolio.profile.name;
document.getElementById("profile-role").textContent = portfolio.profile.role;
document.getElementById("profile-intro").textContent = portfolio.profile.intro;
document.title = portfolio.profile.name + "의 포트폴리오";
portfolio.profile.skills.forEach(skill => document.getElementById("profile-skills").append(element("li", "", skill)));
function renderWorks(works) {
  grid.replaceChildren();
  works.forEach((work, index) => {
    const card = element("article", "work-card");
    const image = element("img", "work-image");
    image.src = work.image;
    image.alt = work.alt;
    image.width = 960;
    image.height = 720;
    const content = element("div", "work-content");
    content.append(element("span", "card-number", "WORK " + String(index + 1).padStart(2, "0")));
    content.append(element("span", "work-category", work.category));
    content.append(element("h3", "", work.title));
    content.append(element("p", "work-summary", work.summary));
    /* DETAIL_BUTTON */
    card.append(image, content);
    grid.append(card);
  });
}
renderWorks(portfolio.works);
