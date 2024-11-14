function switchTheme() {
    const bodyElement = document.getElementById("Application");
    const classNames = bodyElement.classList;
    let siteTheme = document.getElementById("Theme").firstElementChild;

    classNames.toggle;

    if (classNames == "app-theme-light") {
        bodyElement.className = "app-theme-dark";
        siteTheme.src="../public/sun.png";
    }
    else {
        bodyElement.className = "app-theme-light";
        siteTheme.src="../public/full-moon.png";
    }
}

console.log(document.getElementById("Theme"));