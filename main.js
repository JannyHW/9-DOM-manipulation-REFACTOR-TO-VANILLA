let btn = document.querySelectorAll("button");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    hideAll();

    btn[i].nextElementSibling.classList.toggle("active");
  });

  function hideAll() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].nextElementSibling.classList.toggle("active", false);
    }
  }
}
