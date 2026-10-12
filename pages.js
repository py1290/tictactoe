// زبان و تم رو از همون انتخابی می‌خونه که توی خود بازی ذخیره شده
(function () {
    var lang = "fa";
    var theme = "dark";

    try {
        lang = localStorage.getItem("lang") === "en" ? "en" : "fa";
        theme = localStorage.getItem("theme");
    } catch (e) {}

    var button = document.getElementById("lang-toggle");

    function apply(l) {
        document.body.dataset.lang = l;
        document.documentElement.lang = l;
        document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
        document.title = document.body.dataset["title" + (l === "fa" ? "Fa" : "En")];
        button.textContent = l === "fa" ? "EN" : "فا";

        try {
            localStorage.setItem("lang", l);
        } catch (e) {}
    }

    if (theme === "light") {
        document.body.classList.add("light");
    }

    button.addEventListener("click", function () {
        lang = lang === "fa" ? "en" : "fa";
        apply(lang);
    });

    apply(lang);
})();
