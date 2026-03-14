document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const buttons = document.querySelectorAll(
        "#theme-toggle-desktop, #theme-toggle-mobile, #theme-toggle-footer",
    );

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        html.classList.add("dark");
    } else if (savedTheme === "light") {
        html.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (html.classList.contains("dark")) {
                html.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else {
                html.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        });
    });
});