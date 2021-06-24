let FAQ_content_wrapper = document.querySelector(".FAQ_content_wrapper");
let FAQ_content_title = document.querySelectorAll(".FAQ_content_title");
let FAQ_content = document.querySelectorAll(".FAQ_content");

for (let i = 0; i < FAQ_content_title.length; i++) {
  FAQ_content_title[i].addEventListener("click", () => {
    let FAQ_content_disc =
      FAQ_content_title[i].parentElement.querySelector(".FAQ_content_disc");

    if (FAQ_content_title[i].classList.contains("active")) {
      FAQ_content_title[i].classList.remove("active");
      FAQ_content_disc.style.height = 0 + "px";
      return;
    }

    FAQ_content_title[i].classList.add("active");
    FAQ_content_disc.style.height = FAQ_content_disc.scrollHeight + "px";
  });
}
