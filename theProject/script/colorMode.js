// DOM is been manipulation in /*DOM.js*/
const changeToDarkMood = () => {
    linkEl.setAttribute('href', './images/darkmoodLogo.png')              
    bodyEl.setAttribute("data-theme-dark", "dark")
    bodyEl.removeAttribute("data-theme-light")
    darkModeBtn.style.display = "none"
    lightModeBtn.style.display = "block"
};
const changeToLightMood = () => {
	linkEl.setAttribute('href', './images/lightmoodLogo.png')
    bodyEl.setAttribute("data-theme-light", "light")
    bodyEl.removeAttribute("data-theme-dark")
    darkModeBtn.style.display = "block"
    lightModeBtn.style.display = "none"
};
!lightColor ? changeToLightMood(): null
const checkLastColorMood = () => {
    darkColor ? changeToDarkMood(): null
};
darkModeBtn.addEventListener("click", () => {
    localStorage.setItem("darkColor", "Changed color to dark mood.")
    changeToDarkMood();
});
lightModeBtn.addEventListener("click", () => {
    localStorage.removeItem("darkColor");
    changeToLightMood();
});
checkLastColorMood();
