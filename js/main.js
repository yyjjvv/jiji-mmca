//Language Change
const language = document.querySelector(".language");
language.addEventListener("click", () => {
    if (language.classList.contains("active") == false) {
        language.classList.add("active");
    } else {
        language.classList.remove("active");
    }
});

//Aside
const items = document.querySelectorAll("section");
const aside = document.querySelector("aside");
const close = aside.querySelector(".btn_close");

for (let el of items) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let tit = e.currentTarget.querySelector("h3").innerText;
        let dec = e.currentTarget.querySelector("p").innerText;
        let imgSrc = e.currentTarget.querySelector("img").getAttribute("src");

        aside.querySelector("h2").innerText = tit;
        aside.querySelector("p").innerText = dec;
        aside.querySelector("img").setAttribute("src", imgSrc);
        aside.classList.add("on");

        if(language.classList.contains("active") == true) {
            language.classList.remove("active");
        }
    });

    close.addEventListener("click", () => {
        aside.classList.remove("on");
    });
};
