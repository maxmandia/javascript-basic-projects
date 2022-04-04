const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
